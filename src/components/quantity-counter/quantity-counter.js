import React, { useState, useEffect, Component } from 'react';
import './quantity-counter.css';
import { addPizza, removePizza } from '../../actions';
import { connect } from 'react-redux';

// addPizza, removePizza these are actions came from redux state;

class QuantityCounter extends Component {
    state = {
        item: this.props.item
    }

    handleAdd = (item) => {
        this.setState({
            item: {...item}
        });
        this.props.addPizza(item);
    }
    handleRemove = (item) => {
        this.setState({
            item: {...item}
        });
        this.props.removePizza(item);
    }
    render() {
        const { quantity } = this.state.item;
        return (
            <div className="quantity-counter">
                {(!quantity || quantity === 0) && <AddToCartBtn item={this.state.item} addPizza={this.handleAdd} />}
                {quantity > 0 && <Counter item={this.state.item} addPizza={this.handleAdd} removePizza={this.handleRemove} />}
            </div>
        );
    }
}


const Counter = ({ item, addPizza, removePizza }) => {
    const increase = (item) => {
        item.quantity++;
        addPizza(item);
    }

    const decrease = (item) => {
        item.quantity--;
        item.quantity = Math.max(item.quantity, 0);
        removePizza(item);
    }
    return (
        <>
            <div className="add-remove-btn" onClick={() => increase(item)}>
                <img src="./assets/icons/icon-add.svg" alt="add-icon" />
            </div>
            <span className="count-text">{item.quantity}</span>
            <div className="add-remove-btn" onClick={() => decrease(item)}>
                <img src="./assets/icons/icon-remove.svg" alt="remove-icon" />
            </div>
        </>
    )
}

const AddToCartBtn = ({ item, addPizza }) => {
    const handleClick = (item) => {
        item.quantity = 1 + (item.quantity || 0);
        addPizza(item);
    }
    return (
        <>
            <button className="btn btn-primary" onClick={() => handleClick(item)}> Add to cart</button>
        </>
    )
}
// const mapStateToProps = (state) => {
//     return state;
// }

export default connect(
    null,
    { addPizza, removePizza }
)(QuantityCounter);