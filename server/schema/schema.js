import { GraphQLSchema, GraphQLString, GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import mongoose from "mongoose";
import Author from "../models/author.js";
import Book from "../models/book.js";

mongoose.connect(
    "mongodb+srv://rafa:asdasd@cluster0.a8xr2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {},
    () => console.log("Connected to MongoDB")
);

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            // resolve: (parent, args) => authors.find((author) => author.id === parent.authorId),
        },
    }),
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            // resolve: (parent, args) => books.filter((book) => book.authorId === parent.id),
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            // resolve: (parent, args) => books.find((book) => book.id === args.id),
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            // resolve: (parent, args) => authors.find((author) => author.id === args.id),
        },
        books: {
            type: new GraphQLList(BookType),
            // resolve: () => books,
        },
        authors: {
            type: new GraphQLList(AuthorType),
            // resolve: () => authors,
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            resolve: (parent, args) => {
                let author = new Author(args);
                return author.save();
            },
        },
    },
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});

export { schema as bookSchema };
