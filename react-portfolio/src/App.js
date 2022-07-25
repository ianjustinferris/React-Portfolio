import './App.scss';
import PortfolioContainer from './components/Header';
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='app'>
      <PortfolioContainer />
      <Footer />
    </div>

  );
}

export default App;
