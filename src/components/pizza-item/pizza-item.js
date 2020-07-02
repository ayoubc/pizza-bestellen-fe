import React from 'react';
import './pizza-item.css';

const PizzaItem = ({ item }) => {
  return (
    <div className="col-md-3 col-sm-12">
      <div className="card" >
        <img className="card-img-top" src="./assets/images/pizza_de_lado.jpg" alt="pizza" />
        <div className="card-body">
          <h5 className="card-title">
            <span>{item.name}</span>  
            <span className="price">{item.price} &euro;</span>  
          </h5>
          <p className="card-text">{item.discription}</p>
          <button className="btn btn-primary"> Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default PizzaItem;
