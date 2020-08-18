require('dotenv').config();

import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';

import Book from './models/Book';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: async () => await Book.find({}),
  },
};

(async () => {
  const dbPass = process.env.DB_PASS;

  // Connect to the mongodb:atlas cluster
  await mongoose.connect(
    `mongodb+srv://bookreader:${dbPass}@cluster0.6eaex.mongodb.net/gbox?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      // If there was an error connecting, kill the server
      if (error) {
        console.log(error);
        process.exit(1);
      }
    }
  );

  // Create the apollo server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the apollo server
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
