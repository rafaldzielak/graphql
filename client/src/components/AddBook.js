import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { addBookMutation, getAuthorsQuery } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [addBookMut, { dataMutation }] = useMutation(addBookMutation);

  const displayAuthors = () => {
    if (loading) return <option>Loading authors</option>;
    return data.authors.map((author) => (
      <option value={author.id} key={author.id}>
        {author.name}
      </option>
    ));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addBookMut({
      variables: { name, genre, authorId },
    });
  };

  return (
    <form id='add-book' onSubmit={onSubmit}>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} value={name} />
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input type='text' onChange={(e) => setGenre(e.target.value)} value={genre} />
      </div>

      <div className='field'>
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>{displayAuthors()}</select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
