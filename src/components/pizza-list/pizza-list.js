import React, { useState, useEffect } from 'react';
import './pizza-list.css';
import PizzaItem from '../pizza-item/pizza-item';
import axios from "../../services";
import Paginator from '../paginator/paginator';
import { connect } from 'react-redux';
import { loading } from '../../actions';

const MAX_ITEMS = 8;
const PizzaList = ({ page, loading }) => {
    const [pizzaList, setPizzaList] = useState([]);
    const [numPages, setNumPages] = useState(1);
    const lowIndex = (page - 1) * MAX_ITEMS;
    const HighIndex = page * MAX_ITEMS;



    useEffect(() => {
        loading(true);
        axios.get('/pizzas').then(response => {
            setPizzaList(response.data.items);
            let n = response.data.items.length;
            setNumPages(Math.floor((n + MAX_ITEMS - 1) / MAX_ITEMS));
            loading(false);
        });
    }, [])

    return (
        <div className="container">
            <div className="items">
                <div className="row">
                    {pizzaList.slice(lowIndex, HighIndex).map((item) => {
                        return <PizzaItem key={item.id} item={item} />
                    })}

                </div>
                {pizzaList.length > 0 && <div className="paginator">
                    <Paginator max={numPages} />
                </div>}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(
    mapStateToProps,
    { loading }
)(PizzaList);
