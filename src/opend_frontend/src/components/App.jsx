import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";
import Item from "./Item";
import Minter from "./Minter";

function App() {

    const nftID = "a3shf-5eaaa-aaaaa-qaafa-cai";

  return (
    <div className="App">
      <Header />
      <Minter />
      {/* <img className="bottom-space" src={homeImage} /> */}
      {/* <Item id={nftID}/> */}
      <Footer />
    </div>
  );
}

export default App;
