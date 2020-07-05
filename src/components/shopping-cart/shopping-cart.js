import React from 'react';
import './shopping-cart.css';
import { connect } from 'react-redux';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const ShoppingCart = ({ cart }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }
    return (
        <div className="container list-container">
            {cart.length > 0 && <CartTotalPrice cart={cart} />}
            {cart.length > 0 && cart.map((item) => {
                return <ShoppingCartItem key={item.id} item={item} />
            })}
            {cart.length === 0 && <EmptyCart />}
            <div className="display-center menu">
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Go to menu
                </Button>
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

const CartTotalPrice = ({cart}) => {
    return (
        <div className="total-price">
            <span>Total Price: {cart.map(item => item.price * item.quantity).reduce((a,b) => a+b)} &euro;</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.cart);
    return state;
}

export default connect(
    mapStateToProps,
    null
)(ShoppingCart)