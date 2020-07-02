import React, { useState, useEffect } from 'react';
import './pizza-list.css';
import PizzaItem from '../pizza-item/pizza-item';
import axios from "../../services";





const PizzaList = () => {
    const [pizzaList, setPizzaList] = useState([]);

    useEffect(() => {
        axios.get('/pizzas').then(response => {
            console.log(response);
            setPizzaList(response.data.items);
        })
    }, [])
    
    console.log(pizzaList)
    return (
        <div className="row">
            {pizzaList.map((item, index) => {
                return <PizzaItem key={index} item={item} />
            })}
        </div>
    );
}

export default PizzaList;
