import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
const NotFound: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const handleClick = () => {
      navigate('/about'); // Replace '/about' with the desired URL
    };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600">Page Not Found</p>
      
      <h1 className="text-lg text-gray-500 mt-4">The current URL path {location.pathname} does not exist</h1>
      <button
      onClick={handleClick}
      className="mt-8 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none">
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
