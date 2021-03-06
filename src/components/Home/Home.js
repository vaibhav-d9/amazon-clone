import React from "react";

import "./Home.scss";
import prime from "../../assets/amzPrime.jpg";
import prodImg1 from "../../assets/products/tagr.jpg";
import prodImg2 from "../../assets/products/headphone.jpg";
import prodImg3 from "../../assets/products/laptop.jpg";
import prodImg4 from "../../assets/products/echo.jpg";
import prodImg5 from "../../assets/products/book.jpg";
import prodImg6 from "../../assets/products/firestick.jpg";

import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={prime} alt="prime" className="prime_banner"></img>

        <div className="home__row">
          <Product
            id="534715387"
            title="Think & Grow Rich: THE 21st CENTURY EDITION Paperback – 1 March 2020"
            price={199}
            image={prodImg1}
            rating={4}
          />
          <Product
            id="36145712302"
            title="Marshall Mid ANC 04092138 Active Noise Cancelling On-Ear Wireless Bluetooth Headphone (Black)"
            price={4699}
            image={prodImg2}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="365296239"
            title="Microsoft Surface GO 2 STQ-00013 10.1-inch Laptop (Gold Processor 4425Y/8GB/128GB SSD/Windows 10 Home in S Mode/Intel UHD 615 Graphics), Platinum"
            price={65459}
            image={prodImg3}
            rating={3}
          />
          <Product
            id="62871532480"
            title="Echo Input Portable Smart Speaker Edition - Carry Echo anywhere in your home"
            price={3999}
            image={prodImg4}
            rating={4}
          />
          <Product
            id="76175124021"
            title="Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            price={259}
            image={prodImg5}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="986235285"
            title="Fire TV Stick 4K with All-New Alexa Voice Remote | Streaming Media Player"
            price={2499}
            image={prodImg6}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
