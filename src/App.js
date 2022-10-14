import React from 'react';
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';


function App() {
  return (
    <div>
    <NavBar />
    <Hero />
    <Destinations />
    <Search />
    <Selects />
    <ImgCarousel />
    <Footer />
    </div>
  );
}

export default App;
