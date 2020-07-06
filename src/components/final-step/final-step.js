import React, { useEffect } from 'react';
import "./final-step.css";
import { connect } from 'react-redux';
import Form from '../form/form';
import {useHistory} from 'react-router-dom';
import { getTotalPrice, getDeliveryCost } from '../../utils';
import axios from "../../services";
import { loading , inform, emptyCart} from '../../actions';
import { callToast } from '../../utils';

const FinalStep = ({ cart, loading, inform, emptyCart }) => {
    const history = useHistory();

    useEffect( () => {
        if (cart.length === 0) {
            history.push('/menu');
        }
    }, [cart])
 
    const submitOrder = (order) => {
        order.items = [...cart];

        // we have to delete image because this proerty is to large for upload;
        for(let item of order.items) {
            if(item.image) delete item.image;
        }
        order.totalPrice = getTotalPrice(cart) + getDeliveryCost();
        loading(true);
        axios.post('/orders', order).then(response => {
            loading(false);
            callToast(inform, {
                message: "Order saved successefully !",
                httpStatus: 200
            }, 0);
            setTimeout(() => {
                emptyCart();
            }, 5000)
        })
        .catch(error => {
            loading(false);
            callToast(inform, {
                message: "Network Error",
                httpStatus: 500
            }, 0);
        })
    }
    return (
        <div className="container">
            <Form submit={submitOrder}/>
        </div>
    );
}

const mapStateToProps = ({cart}) => ({
    cart
})
export default connect(
    mapStateToProps,
    { loading, inform, emptyCart }
)(FinalStep);
