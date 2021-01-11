import React from 'react'
import './App.css';
import Header from './Header';
import Rooms  from './Rooms';
import Footer from './Footer';
import SearchModal from './SearchModal'
import { useStateValue } from './StateProvider';

function App() {
  const [{ isVisible }] = useStateValue();  
  
  return (
    <div>
      {isVisible ? <SearchModal /> : null}
        <div className="app">      
        <Header/>
        <Rooms/>
        <Footer />
      </div>
    </div>    
  );
}

export default App;
