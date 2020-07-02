import React, { useState, useEffect } from 'react';
import './pizza-list.css';
import PizzaItem from '../pizza-item/pizza-item';
import axios from "../../services";
import Paginator from '../paginator/paginator';
import { connect } from 'react-redux';

const MAX_ITEMS = 8;
const PizzaList = ({ page }) => {
    const [pizzaList, setPizzaList] = useState([]);
    const [numPages, setNumPages] = useState(1);
    const lowIndex = (page - 1) * MAX_ITEMS;
    const HighIndex = page * MAX_ITEMS;



    useEffect(() => {
        axios.get('/pizzas').then(response => {
            setPizzaList(response.data.items);
            let n = response.data.items.length;
            console.log(Math.floor((n + MAX_ITEMS - 1) / MAX_ITEMS))
            setNumPages(Math.floor((n + MAX_ITEMS - 1) / MAX_ITEMS));
        })
    }, [])

    return (
        <div className="items">
            <div className="row">
                {pizzaList.slice(lowIndex, HighIndex).map((item, index) => {
                    return <PizzaItem key={index} item={item} />
                })}

            </div>
            <div className="paginator">
                <Paginator max={numPages} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

export default connect(
    mapStateToProps,
    null
)(PizzaList);
