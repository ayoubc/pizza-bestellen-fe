import React from 'react';
import './App.css';
import PizzaList from './pizza-list/pizza-list';
import NavBar from './nav-bar/nav-bar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const App = ({loading}) => {

  const classes = useStyles();

  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <PizzaList />
      </div>
      <Backdrop className={classes.backdrop} open={loading} >
        <CircularProgress color="inherit" />
        <h5 className="loading-text"> Loading... </h5>
      </Backdrop>
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
)(App);
