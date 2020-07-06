import React from 'react';
import './shopping-cart.css';
import { connect } from 'react-redux';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getTotalPrice, getDeliveryCost } from '../../utils';

const ShoppingCart = ({ cart }) => {
    // const history = useHistory();

    // const handleClick = () => {
    //     history.push('/');
    // }
    return (
        <div className="container list-container">
            {cart.length > 0 && <CartTotalPrice cart={cart} />}
            {cart.length > 0 && cart.map((item) => {
                return <ShoppingCartItem key={item.id} item={item} />
            })}
            {cart.length === 0 && <EmptyCart />}
            <div className="display-center menu">
                <Link to={'/'}>
                    <button className="btn btn-primary col-sm-12"> go to menu </button>
                </Link>
                {cart.length > 0 && <Link to={'/finalise-order'}>
                    <button className="btn btn-primary col-sm-12"> Order </button>
                </Link>}
            </div>
        </div>
    )
}

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <div className="empty-cart-text">
                <p> You don't have any order at this moment !</p>
            </div>
        </div>
    )
}

const CartTotalPrice = ({ cart }) => {
    return (
        <div className="total-price">
            <span>Total Price: {getTotalPrice(cart)} &euro;</span>
            <span>Delivery: {getDeliveryCost()} &euro;</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(
    mapStateToProps,
    null
)(ShoppingCart)