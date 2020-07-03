import React from 'react';
import "./nav-bar.css";
import Cart from '../cart/cart';
import { connect } from 'react-redux';


const NavBar = ({ cart }) => {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-light">
                <div>
                    <a href="#" className="navbar-brand">Home</a>
                </div>
                <div>
                    <button className="btn btn-outline-success btn-auth">LogIn</button>
                    <Cart number={cart.length} />
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return state;
}
export default connect(
    mapStateToProps,
    null
)(NavBar);
