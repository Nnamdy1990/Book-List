import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <nav className='navbar'>
      <h1>Books App</h1>
      {books.length ? (
        <div>There are {books.length} books availble right now</div>
      ) : (
        <div>There are no books availble right now</div>
      )}
    </nav>
  );
};

export default Navbar;
