import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <main className={`${darkTheme && 'dark-mode'}`} >
      <Navbar toggleTheme={toggleTheme}/>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>}
      </div>
    </main>
  );
}

export default App;
