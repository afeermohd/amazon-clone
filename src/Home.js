import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/CyberMonday/Fuji_TallHero_CM_v2_en_US_1x._CB414209152_.png"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id=""
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id=""
            title="Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hoook and Whist, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id=""
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swgge7XAL._AC_SX466_.jpg"
          />
          <Product
            id=""
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="sd"
          />
          <Product
            id=""
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="s"
          />
        </div>

        <div className="home__row">
          <Product
            id=""
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="asd"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
