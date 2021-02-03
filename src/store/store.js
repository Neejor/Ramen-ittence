import allReducers from "../reducers/allReducers"
import {createStore, compose, applyMiddleware} from "redux";
import Axios from "axios";

const thunk = require("redux-thunk").default;

const setList = (dishes) => {
    return {
      type: "onLoad",
      dishes: dishes
    }
  }
  
  const List = () => {
      return function(dispatch){
          console.log("SS");
          Axios.get("http://localhost:4000/dishCatalogueDB/find")
              .then(res => {
                  console.log(res.data);
                  dispatch(setList(res.data));
              })
              .catch(err => {
                  console.log(err);
              })
      }
  }
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const myStore = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));
  myStore.subscribe(()=>{console.log(myStore.getState());});
  myStore.dispatch(List());

  export default myStore;