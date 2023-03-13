import { useState, useEffect } from "react";
import data from './assets/storeData.json';

import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Main from "./Components/Main"
import MainContext from './Components/MainContext';


function App() {

  const [storeData, setStoreData] = useState(data.furniture);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [filteredData, setFilteredData] = useState(storeData);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    if (!cartItems.find(cartItem => cartItem.id === item.id)) {
      setCartItems([...cartItems, item]);
    }
  }

  const deleteItemFromCart = (id) => {
    const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== id);
    setCartItems(filteredCartItems);
    localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
  }
  

  const obj = {
    storeData,
    setStoreData,
    cartItems,
    setCartItems,
    addToCart,
    deleteItemFromCart,
    filteredData,
    setFilteredData
  }


  return (

    <MainContext.Provider value={obj}>
      <div className="app max-w-[1320px] mx-auto my-12 px-10">
        <Header />
        <Main />
        <Footer />
      </div>
    </MainContext.Provider>
  )
}

export default App
