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
  const [currentPage, setCurrentPage] = useState('shop')

  const toggleCart = () => {
    setCurrentPage('cart')
  }
  const toggleShop = () => {
    setCurrentPage('shop')
  }

  return (
    <div className="App">
      <ProductsProvider>
        <Header toggleCart={toggleCart} toggleShop={toggleShop}/>
        <Cap currentPage={currentPage}/>
        {currentPage === 'shop' && (
          <>
          <Shop />
          <Newsletter />
          </>
        )}
        {currentPage === 'cart' && <Cart />}
        <Footer/>
      </ProductsProvider>  
    </div>
  );
}

export default App;
