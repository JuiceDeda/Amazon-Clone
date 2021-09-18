import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
          title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold"
          price={969.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/appcore/laptop/nov2020npi/AMZ_FamilyStripe_MacBook_Pro_13_inch_M1._CB416900047_.png"
          />
          <Product
          title="New Apple AirPods Max - Space Gray"
          price={367.49}
          rating={4}
          image="https://m.media-amazon.com/images/I/81jqUPkIVRL._AC_SX522_.jpg"
          
          
          
          
          />
        </div>

        <div className="home__row">
        <Product
        title="The 4-Hour Workweek, Expanded and Updated: Expanded and Updated"
        price={16.25}
        rating={4}
        image="https://m.media-amazon.com/images/I/51pPn2LkI8L.jpg"
        
        
        
        />
        <Product
         title="adidas Grand Court Men's Tennis Shoe"
         price={80.00}
         rating={4}
         image="https://i.pinimg.com/originals/63/1c/23/631c23aba921d47e86eaf07495f576f1.jpg"
        
        
        />
        <Product
         title="Apple Watch Series 6 (GPS + Cellular, 44mm) - Space Gray Aluminum Case with Black Sport Band"
         price={459.99}
         rating={5}
         image="https://m.media-amazon.com/images/I/71yOGVLGWpL._AC_SL1500_.jpg"
        
        />

        </div>
        <div className="home__row">
        <Product
         title="SAMSUNG LC24F390FHNXZA 24-inch Curved LED Gaming Monitor (Super Slim Design), 60Hz Refresh Rate w/AMD FreeSync Game Mode"
         price={299.99}
         rating={4}
         image="https://m.media-amazon.com/images/I/91C8CTFCkBL._AC_SL1500_.jpg"
        
        
        />
          

        </div>

      </div>
    </div>
    );
}

export default Home;