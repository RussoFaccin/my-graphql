var mysql = require('mysql');
var connectionOptions = {
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'ppm-2017',
	port: '8889'
};

exports.root = {
	getAllMedia: async() => {
		var data = null;
		var query = 'SELECT * FROM Media';
		await get(query).then(function (response) {
			data = response;
		}, function (error) {});
		return data;
	},

	getMediaByType: async ({type}) => {
		var data = null;
		var query = `SELECT * FROM Media WHERE Type = "${type}"`;
		await get(query).then(function (response) {
			data = response;
		}, function (error) {});
		return data;
	}
};

function get(querystr) {
	return new Promise(function (resolve, reject) {
		var connection = mysql.createConnection(connectionOptions);
		connection.connect();

		connection.query(querystr, function (error, results, fields) {
			if (error) {
				reject(Error(error));
			}
			var data = [];
			for (let i = 0; i < results.length; i++) {
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
