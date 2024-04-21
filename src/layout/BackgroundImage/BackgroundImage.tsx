import React, { useState, useEffect } from 'react';
 

interface Image {
  url: string;
}
const images: Image[] = [
    // Replace with the URLs of your 5 images
  
    {url:'https://th.bing.com/th/id/OIP.BTNLhrr8BnKUSIb5WXaDVAHaEK?rs=1&pid=ImgDetMain'},
    {
      url:"https://th.bing.com/th/id/R.cba63acc8bf48d0942a67fd02a0b0249?rik=YZB9h2eOoA02eA&riu=http%3a%2f%2fimg.auctiva.com%2fimgdata%2f1%2f6%2f7%2f4%2f5%2f8%2f2%2fwebimg%2f843017159_o.jpg&ehk=yfArozWLsqbGcHxsP72mvFcVIh1wZHpTh2SbfhLowAE%3d&risl=&pid=ImgRaw&r=0"
    },
    {url:"https://th.bing.com/th/id/OIP.LgR2OMK2y9MA8O4B7J1TywHaKr?rs=1&pid=ImgDetMain"}
  
 
  ];
   

  const BackgroundImage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log('currentIndex',currentIndex)   
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); 
  
      return () => clearInterval(intervalId); 
    }, [images.length]); 
  
    const currentImage = images[currentIndex];
    
    return (
      <div className="relative overflow-hidden h-screen ">
        
        <img
          src={currentImage.url}
          alt="Background Image"
          className="absolute inset-0 object-fill h-full w-full z-0  "
         
        />
      
      </div>
    );
  };

  export default BackgroundImage;