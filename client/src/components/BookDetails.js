import React from "react";
import { getBookQuery } from "../queries/queries";
import { useQuery } from "@apollo/client";

const BookDetails = ({ id }) => {
  const { loading, error, data } = useQuery(getBookQuery, { variables: { id } });

  const displayBookDetails = () => {
    if (!data) return <div>No book selected</div>;
    const { book } = data;
    return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author</p>
        <ul className="other-books">
          {book.author.books.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="book-details">
      <p>Output book details</p>
      {displayBookDetails()}
    </div>
  );
};

export default BookDetails;
