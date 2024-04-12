import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {} // Empty interface for now (can be expanded if needed)

const Header: React.FC<HeaderProps> = () => {
 

  return (
    <header
      className={`mx-3 my-2 transition   duration-300  ease-in-out fixed `}
    >
      <nav className="flex justify-start items-center rounded-md p-2">
        <img
          src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iZXJ8ZW58MHx8MHx8fDA%3D"
          alt="Image"
          className="h-14 w-14 m-1 rounded-full"
        />
        <ul className="flex space-x-10">
          <Link to="/">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="/recommended">Recommended</Link>
          <Link to="/news">News</Link>
          <Link to="/newsLetter">NewsLetter</Link>
        </ul>
        {/* <Button onClick={() => console.log("btn")}>Sign Up</Button> */}
      </nav>
    </header>
  );
};

export default Header;
