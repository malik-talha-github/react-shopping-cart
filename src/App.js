import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import Footer from './components/Footer'
import AddItem from './components/AddItem.js';


function App() {
  const initialProducts = [
    {
      price: 9999,
      name: "IPhone 15",
      quantity: 0,
    },
    {
      price: 999,
      name: "Redmi note 12 pro",
      quantity: 0,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    newProducts[index].quantity++;
    newTotalAmount += newProducts[index].price;
    setTotalAmount(newTotalAmount);
    setProducts(newProducts);
  };
  const decrementQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    if(newProducts[index].quantity > 0)
    {
      newProducts[index].quantity--
      newTotalAmount -= newProducts[index].price;

    } 
    setTotalAmount(newTotalAmount);
    setProducts(newProducts);
  };

  const resetQuantity =() =>{
    let newProducts = [...products];
    newProducts.map((products)=>{ products.quantity=0})
    setProducts(newProducts);
    setTotalAmount(0);
  }

  const removeItem = (index) => {
  let newProducts = [...products];
  let newTotalAmount = totalAmount - newProducts[index].quantity * newProducts[index].price;
  newProducts.splice(index, 1);
  setProducts(newProducts);
  setTotalAmount(newTotalAmount);
};
  
  const addItem =(name,price) =>{
    let newProducts = [...products];
    newProducts.push({
      price:price,
      name:name,
      quantity:0
    });
    setProducts(newProducts); 
   }

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
     <AddItem addItem={addItem}/>  
     <ProductList products={products} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem} />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity ={resetQuantity}/>

    </>
  );
}

export default App;
