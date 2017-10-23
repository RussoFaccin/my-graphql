exports.root = {
    allMedia: async() => {
        var data = null;
        await get().then(function(response){
          console.log(response);
          data = response;
        }, function(error){});
        return data;
      }
};

function get(){
    return new Promise(function(resolve, reject){
      var mysql      = require('mysql');
      var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'ppm-2017',
        port: '8889'
      });
       
      connection.connect();
      connection.query('SELECT * FROM Media', function (error, results, fields) {
        if (error){
          reject(Error(error));
        }
        var data = [];
        for(let i = 0; i<results.length; i++){
          var item = {
            id: results[i].id,
            type: results[i].Type,
            filename: results[i].FileName,
            filepath: results[i].FilePath,
            videoid: results[i].VideoIdentifier,
          }
          data.push(item);
        }
        resolve(data);
      });
    });
  }