import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out Services!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/owningDog.jpg"
              text="Owning a dog can help you live longer"
              label="Purchase"
              path="/services"
            />
            <CardItem
              src="images/dogHealth.jpg"
              text="We're here to help you keep your pup happy and healthy"
              label="Dogs Health Care"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/newOwner.jpg"
              text="We're here to help you in Finding Right New Owners for Your Dog"
              label="Sell"
              path="/services"
            />
            <CardItem
              src="images/dogCare.jpg"
              text="Want to go somewhere for few days, But! worried about your pet? 
              We're here to to take responsibility of your dog"
              label="Dogs Care"
              path="/products"
            />
            <CardItem
              src="images/mating.jpg"
              text="Find mating partner for your dog"
              label="Mating"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
