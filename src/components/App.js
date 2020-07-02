import React from 'react';
import './App.css';
import PizzaList from './pizza-list/pizza-list';
import NavBar from './nav-bar/nav-bar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <PizzaList />
      </div>
    </div>

  );
}

export default App;
