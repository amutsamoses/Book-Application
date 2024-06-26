// import { useState } from "react";
// import BookList from "./BookList";
// import BookForm from "./BookForm";

// const Header = () => {
//   const [page, setPage] = useState("list");

//   const renderPage = () => {
//     switch (page) {
//       case "list":
//         return <BookList />;
//       case "add":
//         return (
//           <BookForm
//             book={{
//                 id: 0,
//               booktitle: undefined,
//               author: undefined,
//               year: undefined,
//             // }}
//             handleOnSubmit={function (): void {
//               throw new Error("Function not implemented.");
//             }}
//           />
//         );
//       default:
//         return (
//           <BookList
//             books={[]}
//             onEditBook={function (book: Book): void {
//               throw new Error("Function not implemented.");
//             }}
//             onDeleteBook={function (id: number): void {
//               throw new Error("Function not implemented.");
//             }}
//           />
//         );
//     }
//   };

//   return (
//     <header>
//       <h1>Book Management App</h1>
//       <hr />
//       <div className="links">
//         <button onClick={() => setPage("list")}>Books List</button>
//         <button onClick={() => setPage("add")}>Add Book</button>
//       </div>
//       {renderPage()}
//     </header>
//   );
// };

// export default Header;
