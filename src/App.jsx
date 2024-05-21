import Header from './component/Header'
import './App.css';
import './component/Header';
import FirstPage from './component/Firstpage';
import Stickybar from './component/StickyBar';
import Rating from './component/Rating';
import Wand from './component/Wand';
import Cards from './component/Cards';
import Browser from './component/Browser';
import Features from './component/Features';
import Footer from './component/Footer';

function App() {

  return ( 
    <div >
      
      <div className='stickybar'>
        <Stickybar />
      </div>
    
      <div className='god'>
      
        
        <div className='craddle'>
          <Header />
          <FirstPage />
          <Rating />
          <Wand />
          <Cards />
          <Browser />
          <Features />

        </div>
      </div>
      <Footer />
      
      
    </div>
    
  );
}

export default App;
