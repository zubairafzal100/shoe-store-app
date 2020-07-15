import React from 'react';
import { useParams } from 'react-router-dom';
import Shoe from '../Shoe.json';


function ProductItems() {

  const { id } = useParams();
  const products = Shoe[id];

  if (!products) {
    return <h2 className="proItems-h2">Product Not Found!</h2>
  }

  return (
    <div className="proItems-container">
      <h1 className="proItems-h1">{products.name}</h1>
      <div className="proItems-details-div">
        <h2>{products.name}</h2>
        <img width="60%" src={products.img} alt="Products-img" />
        <div className="proItems-info-div">
          <h3>Color: {products.color}</h3>
          <h3>Price: {products.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
