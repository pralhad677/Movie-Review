import React from 'react';
import Header from '../header/Header'; // Assuming Header is a TSX component
import Footer from '../footer/Footer'; // Assuming Footer is a TSX component
import Main from '../main/Main';

interface LayoutProps {
  children: React.ReactNode; // Define the type of the 'children' prop
  style?:string
}

const Layout: React.FC<LayoutProps> = ({ children,style }) => {
  return (
    <div className="layout">
      <Header />
      <Main children={children}  ></Main>
      <Footer />
    </div>
  );
};

export default Layout;
