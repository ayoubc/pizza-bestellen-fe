import React, { Component } from 'react';
import "./nav-bar.css";
import Cart from '../cart/cart';

class NavBar extends Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-light">
                    <div>
                        <a href="#" className="navbar-brand">Home</a>
                    </div>
                    <div>
                        <button className="btn btn-outline-success btn-auth">LogIn</button>
                        <Cart number={5} />
                    </div> 
                </nav>
            </div>
        );
    }
}

export default NavBar;
