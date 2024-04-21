import React from 'react';
import './Main.css'
interface MainProps {
    children:React.ReactNode,
    style?:string
} // Empty interface for now

const  Main: React.FC<MainProps> = ({children,style})=>{
  return (
    <div   className='h-screen overflow-y-auto bg-gray-200 '> 
    
        <main  className='mt-24'>{children}</main>
    </div>
  );
}

export default Main;
