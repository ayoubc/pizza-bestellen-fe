import React from 'react';
import "./nav-bar.css";
import Cart from '../cart/cart';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';


const NavBar = ({ cart }) => {
    
    return (
        <div className="nav-container">
            <nav className="navbar navbar-light">
                <div>
                    <Link to={'/menu'} className="navbar-brand"> Home </Link>
                </div>
                <div>
                    <button className="btn btn-outline-success btn-auth">LogIn</button>
                    <Link to={'/orders'}><Cart number={cart.length} /></Link>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(
    mapStateToProps,
    null
)(NavBar);
