import React from "react";
import CarouselContainer from "./Components/Carousel/CarouselContainer";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "./styles.css";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <CarouselContainer />
        <Cards />
        <Footer />

        {/* <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
          <Route component={Error}></Route>
        </Switch> */}
      </Router>
    </div>
  );
}
export default App;
