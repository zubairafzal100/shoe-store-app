import React from 'react';
import HomeCards from './Cards';
import '../App.css';

function Home() {
  return (
    <div>
        <img className="home-img" src="https://cdn.shopify.com/s/files/1/0316/8249/4604/files/FREE-SHIPPING-BANNER_1296x.jpg?v=1594742423" alt="Main-img" />
        <HomeCards />
    </div>
  );
}

export default Home;
