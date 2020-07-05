import React from 'react';
import './App.css';
import PizzaList from './pizza-list/pizza-list';
import ShoppingCart from './shopping-cart/shopping-cart';
import NavBar from './nav-bar/nav-bar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const App = ({ loading }) => {

  const classes = useStyles();

  return (
    <div className="app">

      <BrowserRouter>
        <NavBar />
        <Route path="/" exact render={() => (<Redirect to="/menu" />)} /> 
        <Route path='/menu' exact component={PizzaList} />
        <Route path='/orders' exact component={ShoppingCart} />
      </BrowserRouter>
      
      <Backdrop className={classes.backdrop} open={loading} >
        <CircularProgress color="inherit" />
        <h5 className="loading-text"> Loading... </h5>
      </Backdrop>
    </div>


  );
}


const mapStateToProps = (state) => {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(App);
