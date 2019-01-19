import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import Product from './Product';
import Sizes from './Sizes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      filtered: [],
    }
  }

  handleClick = (e, i) => {    
    this.setState({
      cart: [...this.state.cart, i],
    });    
  }

  handleFilter = (e, i) => {
    i = e.target.innerHTML;
    this.setState({
      filtered: [...this.state.filtered, i],
    });
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <div>
        {data.products && data.products.map((item, index) => <Product key={index} product={item} click={this.handleClick}/> )}
        <Sizes click={this.handleFilter} data={data}/>
      </div>
    );
  }
}

export default App;