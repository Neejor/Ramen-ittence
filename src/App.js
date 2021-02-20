import React from "react";
import {useSelector} from "react-redux";
import axios from "axios";

import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Card from "./components/cardComponent";


function App() {
  const [classLT,setClassLT] = React.useState("navbar bg-light hide");
  var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 750) {
    setClassLT("navbar bg-light show");
  } else {
    setClassLT("navbar bg-light hide");
  }
};
window.addEventListener("scroll", myScrollFunc);

let dishList = useSelector(state => state.load.dish);
function CardList(item) {
  return(
    <Card 
      title = {item.title}
      price = {item.price}
      description = {item.description}
      img = {item.image}
    />
)
}

  return (
    <div class="CON">
      <Banner />
      <Navbar class = {classLT}/>
      <section className="dishes" id="dishes">
      {dishList.map(CardList)}
      </section>  
    </div>
  );
}

export default App;
