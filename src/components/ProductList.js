import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    props.products.length >0 ?
    props.products.map((product, i) => (
      <Product key={i} product={product} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem={props.removeItem}/>
    ))
    : <h1> GHAREEB H TUN</h1>
  );
}
