import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import ItemDetails from "./components/Details/ItemDetails";
import ErrorPage from './components/ErrorPage'
import BuyItem from './components/Products/BuyItem'
import ItemSell from './components/Products/ItemSell'
import { Route } from "react-router-dom";
import About from "./components/About/About";
import { Routes } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/buyItems" element={<BuyItem />} />
        <Route path="/ItemSell" element={<ItemSell />} />
        <Route path=":slug" element={<ItemDetails />} />
        <Route element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
