import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import ItemDetails from "./components/Details/ItemDetails";
import ErrorPage from './components/ErrorPage'
import BuyItem from './components/Products/BuyItem'
import ItemSell from './components/Products/ItemSell'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About/About";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/about" render={About} />
        <Route path="/cart" render={Cart} />
        <Route path="/item" render={ItemDetails} />
        <Route path="/error" render={ErrorPage} />
        <Route path="/buyItems" render={BuyItem} />
        <Route path="/ItemSell" render={ItemSell} />
        <Route exact path="/" render={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
