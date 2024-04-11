import React from 'react';

interface MainProps {
    children:React.ReactNode
} // Empty interface for now

const  Main: React.FC<MainProps> = ({children})=>{
  return (
    <div> 
        <main>{children}</main>
    </div>
  );
}

export default Main;
