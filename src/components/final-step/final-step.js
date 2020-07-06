import React, { useEffect } from 'react';
import "./final-step.css";
import { connect } from 'react-redux';
import Form from '../form/form';
import {useHistory} from 'react-router-dom';
import { getTotalPrice } from '../../utils';
import axios from "../../services";
import { loading , inform} from '../../actions';
import { callToast } from '../../utils';

const FinalStep = ({ cart, loading, inform }) => {
    const history = useHistory();

    useEffect( () => {
        if (cart.length === 0) {
            history.push('/menu');
        }
    }, [])
 
    const submitOrder = (order) => {
        console.log(order);
        order.items = cart;
        order.totalPrice = getTotalPrice(cart);
        // console.log(order);\
        loading(true);
        axios.post('/orders', order).then(response => {
            // console.log(response);
            loading(false);
            callToast(inform, {
                message: "Order saved successefully !",
                httpStatus: 200
            }, 0);
            // callToast(inform, null, 4);
        })
        .catch(error => {
            loading(false);
            callToast(inform, {
                message: "Network Error",
                httpStatus: 500
            }, 0);
            // callToast(inform, null, 4);
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
    { loading, inform }
)(FinalStep);
