import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [bookId, setBookId] = useState(null);

  const displayBooks = () => {
    if (loading) return <div>Loading books</div>;
    return data.books.map((book) => (
      <li key={book.id} onClick={(e) => setBookId(book.id)}>
        {book.name}
      </li>
    ));
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      {bookId && <BookDetails id={bookId} />}
    </div>
  );
};

export default BookList;
