import axios from 'axios';


export default axios.create({
    // baseURL: `https://pizza-bestellen-be.herokuapp.com/api`
    baseURL: `http://localhost:3030/api`
  });