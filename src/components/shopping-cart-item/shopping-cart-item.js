import React from 'react';
import './shopping-cart-item.css';
import QuantityCounter from '../quantity-counter/quantity-counter';

const ShoppingCartItem = ({ item }) => {
  return (
    <div className="row item-order">
      <div className="col-md-4 col-sm-12 display-center border-right">
        <img className="pizza-img" src="./assets/images/pizza_de_lado.jpg" alt="pizza" />
      </div>
      <div className="col-md-4 col-sm-12 border-right">
        <h5 className="card-title">
          <span>{item.name}</span>
          <span className="price">{item.price} &euro;</span>
        </h5>
        <p className="card-text">{item.discription}</p>
      </div>
      <div className="col-md-4 col-sm-12 display-center">
        <QuantityCounter item={item} />
      </div>
    </div>
  );
}

export default ShoppingCartItem;