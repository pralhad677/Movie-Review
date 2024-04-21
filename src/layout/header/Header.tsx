import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../../component/SerachBox';

 

const Header =  ( ) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300); // Adjust delay as needed
    return () => clearTimeout(timeout);
  }, []);
  const handleSearch = (query: string) => {
    // Handle search functionality here, e.g., make an API call with the search query
    console.log('Search query:', query);
  };
  return (
    <header
      className={`  mx-3 my-2 transition duration-300 ease-in-out fixed top-0 z-10   rounded-lg transition duration-300 ease-in-out transform ${isVisible ? '' : '-translate-y-full'}`}
    >
      <nav className=" w-screen flex justify-evenly items-center rounded-md p-2">
        <img
          src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iZXJ8ZW58MHx8MHx8fDA%3D"
          alt="Image"
          className="h-14 w-14 m-1 rounded-full"
        />
        <ul className="flex space-x-16 text-white ">
          <Link className='ml-12' to="/">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="/recommended">Recommended</Link>
          <Link to="/news">News</Link>
          <Link to="/newsLetter">NewsLetter</Link>
          <SearchBox onSearch={handleSearch} />
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
<NotificationIcon notificationCount={2} />
 

        </ul>
       
         
      </nav>
    </header>
  );
} ; 

const NotificationIcon: React.FC<{ notificationCount: number }> = ({ notificationCount }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      {/* Hero icon SVG markup (e.g., a bell icon) */}
      <path d="M12 2c1.1 0 2 .9 2 2v1h4c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h4v-1c0-1.1.9-2 2-2zm-3 8v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1c1.1 0 2 .9 2 2v4c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1v-4c0-1.1.9-2 2-2zm0 7h6c1.1 0 2-.9 2-2v-3c0-2.76-2.24-5-5-5s-5 2.24-5 5v3c0 1.1.9 2 2 2z" fill="yellow"/> {/* Change the fill color to yellow */}
      
      {/* Notification pop-up markup */}
      {notificationCount > 0 && (
        <>
          <circle cx="19" cy="6" r="3" fill="red"/> {/* Notification dot */}
          <text x="17" y="9" fill="white" fontSize="8">{notificationCount}</text> {/* Notification count */}
        </>
      )}
    </svg>
  );
}

export default Header;
