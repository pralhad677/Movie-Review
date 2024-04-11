import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {} // Empty interface for now (can be expanded if needed)

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <nav>
        <img src="" alt="Image" />  {/* Added descriptive alt text */}
        <Link to="/">Home</Link>
    
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>
        <button>Sign Up</button>  {/* Capitalized "Sign Up" for consistency */}
      </nav>
    </div>
  );
};

export default Header;
