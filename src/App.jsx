import Header from './component/Header'
import './App.css';
import './component/Header';
import FirstPage from './component/Firstpage';
import Stickybar from './component/StickyBar';
import Rating from './component/Rating';
import Wand from './component/Wand';
import Cards from './component/Cards';

function App() {

  return ( 
    <div>
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
      </div>
      </div>
      
    </div>
    
  );
}

export default App;
