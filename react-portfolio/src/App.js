import './App.scss';
import PortfolioContainer from './components/Header';
import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='app'>
      <PortfolioContainer />
    </div>

  );
}

export default App;
