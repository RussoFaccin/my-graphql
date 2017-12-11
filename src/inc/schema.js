exports.typeDefs = `
type Media {
  id: ID!
  type: String
  filename: String
  filepath: String
  videoid: String
}

type Query {
	getAllMedia: [Media!]
	getMediaByType(type: String!): [Media]
}
`;
