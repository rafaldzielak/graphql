import express from "express";
import { graphqlHTTP } from "express-graphql";
import { bookSchema } from "./schema/schema.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use("/graphql", graphqlHTTP({ schema: bookSchema, graphiql: true }));

app.listen(5000, () => console.log("Server is running "));
