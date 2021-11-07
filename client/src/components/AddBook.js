import React from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const displayAuthors = () => {
    if (loading) return <option>Loading authors</option>;
    return data.authors.map((author) => (
      <option value={author.id} key={author.id}>
        {author.name}
      </option>
    ));
  };

  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>Author:</label>
        <select>{displayAuthors()}</select>
      </div>

      <button></button>
    </form>
  );
};

export default AddBook;
