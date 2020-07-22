import React, { useState, useEffect } from 'react';
import './pizza-list.css';
import PizzaItem from '../pizza-item/pizza-item';
import axios from "../../services";
import Paginator from '../paginator/paginator';
import { connect } from 'react-redux';
import { loading, inform } from '../../actions';
import { callToast } from '../../utils';

const SMALL_DEVICE_BREAK_POINT = 768;
const MAX_ITEMS = 8;
const PizzaList = ({ page, loading, cart, inform }) => {
    const [pizzaList, setPizzaList] = useState([]);
    const [numPages, setNumPages] = useState(1);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const lowIndex = windowSize > SMALL_DEVICE_BREAK_POINT ? (page - 1) * MAX_ITEMS : 0;
    const highIndex = windowSize > SMALL_DEVICE_BREAK_POINT ?  page * MAX_ITEMS : undefined;
    
    // console.log(window.innerWidth);

    const updateWindowSize = () => {
        setWindowSize(window.innerWidth);
    }

    useEffect(() => {
        loading(true);
        axios.get('/pizzas').then(response => {
            for (let item of response.data.items) {
                for (let pizza of cart) {
                    if (item.id === pizza.id) {
                        item.quantity = pizza.quantity;
                    }
                }
            }
            setPizzaList(response.data.items);
            let n = response.data.items.length;
            setNumPages(Math.floor((n + MAX_ITEMS - 1) / MAX_ITEMS));
            loading(false);
            window.addEventListener('resize', updateWindowSize);
            return () => {
                window.removeEventListener('resize', updateWindowSize);
            }
        })
        .catch(error => {
            loading(false);
            callToast(inform, {
                message: "Network Error",
                httpStatus: 500
            }, 0);
        });
    }, [])

    const getListPage = () => {
        return pizzaList.slice(lowIndex, highIndex).map((item) => {
            for (let pizza of cart) {
                if (item.id === pizza.id) {
                    item.quantity = pizza.quantity;
                }
            }
            return <PizzaItem key={item.id} item={item} />
        })
    }

    return (
        <div className="container">
            <div className="items">
                <div className="row">
                    {getListPage()}
                </div>
                {pizzaList.length > 0 && windowSize > SMALL_DEVICE_BREAK_POINT && <div className="paginator">
                    <Paginator max={numPages} />
                </div>}
            </div>
        </div>
    );
}

const mapStateToProps = ({ cart, page }) => ({
    cart,
    page
})

export default connect(
    mapStateToProps,
    { loading, inform },
)(PizzaList);
