exports.typeDefs = `
type Media {
  id: ID!
  type: String
  filename: String
  filepath: String
  videoid: String
}

type Query {
  allMedia: [Media!]
  mockMedia: [Media!]
}
`;