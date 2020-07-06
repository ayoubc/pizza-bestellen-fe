import React, { useEffect } from 'react';
import './App.css';
import PizzaList from './pizza-list/pizza-list';
import ShoppingCart from './shopping-cart/shopping-cart';
import NavBar from './nav-bar/nav-bar';
import FinalStep from './final-step/final-step';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Toaster from './toaster/toaster';
import { inform } from '../actions';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const App = ({ loading, toastInfo, inform }) => {

  const classes = useStyles();

  if (toastInfo) {
    setTimeout(() => {
      inform(null)
    }, 4000);
  }

  return (
    <div className="app">

      <BrowserRouter>
        <NavBar />
        <Route path="/" exact render={() => (<Redirect to="/menu" />)} />
        <Route path='/menu' exact component={PizzaList} />
        <Route path='/orders' exact component={ShoppingCart} />
        <Route path='/finalise-order' exact component={FinalStep} />
      </BrowserRouter>

      <Backdrop className={classes.backdrop} open={loading} >
        <CircularProgress color="inherit" />
        <h5 className="loading-text"> Loading... </h5>
      </Backdrop>
      {toastInfo &&
        <Toaster
          message={toastInfo.message}
          status={toastInfo.httpStatus}
        />}
    </div>


  );
}



const mapStateToProps = (state) => {
  return state;
}

export default connect(
  mapStateToProps,
  { inform }
)(App);
