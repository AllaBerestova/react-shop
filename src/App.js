import React from 'react';
import FooterContainer from './components/footer';
import HeaderContainer from './components/header';
import Shop from './components/shop';
import './App.css';







function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <Shop/>
      <FooterContainer/>
    </div>
  );
}

export default App;
