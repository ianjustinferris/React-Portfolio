import './App.scss';
import PortfolioContainer from './components/Header';
import Footer from './components/Footer'


function App() {
  return (
    <div className='app'>
      <PortfolioContainer />
      <Footer fixed="bottom" />
    </div>

  );
}

export default App;
