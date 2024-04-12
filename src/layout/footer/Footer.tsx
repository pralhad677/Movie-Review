import React from 'react';

interface FooterProps {} // Empty interface for now (can be expanded if needed)

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className=" fixed bottom-0 rounded-lg3  w-full bg-gray-800 text-white py-4 px-8 flex justify-center items-center">
      <p>Copyright &copy; {new Date().getFullYear()} Your Company Name</p>
    </footer>
  );
};

export default Footer;
