import React from 'react';
import Shoe from '../Shoe.json';
import { Link } from 'react-router-dom';
import '../App.css';


function Product() {
  return (
    <div className="product-container">
      <h1>Collection</h1>
      <div className="product-flex">
        {Object.keys(Shoe).map(keyName => {
          const products = Shoe[keyName];
          return (<Link to={`/product/${keyName}`} className="details-div" key={keyName}>
            <h2>{products.name}</h2>
            <img width="40%" src={products.img} alt="Products-img" />
            <div className="info-div">
              <h3>Color: {products.color}</h3>
              <h3>Price: {products.price}</h3>
            </div>
          </Link>)
        })}
      </div>
    </div>
  );
}

export default Product;
