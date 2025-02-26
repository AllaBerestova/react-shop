import React, {useState} from 'react';
import { ProductsProvider } from './context/products';
import Header from './components/header/header';
import Cap from './components/cap/cap';
import Shop from './components/shop/shop';
import Cart from './components/cart/cart'
import Newsletter from './components/newsletter/newsletter';
import Footer from './components/footer/footer';
import './App.css';


function App() {
  const [cartOpen, setCartOpen] = useState(false)

  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div className="App">
      <ProductsProvider>
        <Header toggleCart={toggleCart}/>
        <Cap/>
        {cartOpen ? (
          <Cart/>
        ):
        (
          <>
        <Shop/>
          <Newsletter/>
          </>)}
        
        <Footer/>
      </ProductsProvider>  
    </div>
  );
}

export default App;
