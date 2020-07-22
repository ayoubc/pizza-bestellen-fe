import React from 'react';
import './pizza-item.css';
import QuantityCounter from '../quantity-counter/quantity-counter';

const PizzaItem = ({ item }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card" >
        <img className="card-img-top" src={item.image} alt="pizza" />
        <div className="card-body">
          <h5 className="card-title">
            <span>{item.name}</span>
            <span className="price">{item.price} &euro;</span>
          </h5>
          <p className="card-text">{item.discription}</p>
          <QuantityCounter item={item}/>
        </div>
      </div>
    </div>
  );
}

export default PizzaItem;
// export default connect(
//   null,
//   { addPizza }
// )(PizzaItem);
