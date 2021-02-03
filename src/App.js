import React from "react";
import {useSelector} from "react-redux";
import axios from "axios";

import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Card from "./components/cardComponent";

import store from "./store/store";

const setList = (dishes) => {
  return {
    type: "onLoad",
    dishes: dishes
  }
}

const List = () => {
  return function(dispatch){
      axios.get("http://localhost:4000/dishCatalogueDB/find")
          .then(res => {
              dispatch(setList(res.data));
          })
          .catch(err => {
              console.log(err);
          })
  }
}

function App() {
  // store.dispatch(List());

  const [classLT,setClassLT] = React.useState("navbar bg-light hide");
  var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 792) {
    setClassLT("navbar bg-light show");
  } else {
    setClassLT("navbar bg-light hide");
  }
};
window.addEventListener("scroll", myScrollFunc);

let dishList = useSelector(state => state.load.data);
console.log(dishList);
function CardList(item) {
  return (
    <Card title = {item.title} description = {item.description} img = {item.image} price = {item.price} />
  )
}

  return (
    <div>
      <Banner />
      <Navbar class = {classLT}/>
      {dishList.map(CardList)}  
    </div>
  );
}

export default App;
