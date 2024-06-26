import React from "react";
import BookForm from "./BookForm";

interface AddBookProps {}

const AddBook: React.FC<AddBookProps> = () => {
  const handleOnSubmit = (book: any) => {
    console.log(book);
  };

  return (
    <>
      <BookForm
        handleOnSubmit={handleOnSubmit}
        book={{
          booktitle: undefined,
          author: undefined,
          year: undefined,
        }}
      />
    </>
  );
};

export default AddBook;
