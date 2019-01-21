import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import Product from './Product';
import Sizes from './Sizes';
import Sort from './Sort';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: data.products,
      displayData: data.products,
      cart: [],
      filtered: [],
      sortOption: "select",
    }
  }

  checkSortState = () => {
    const referenceData = this.state.displayData.slice();
    
    switch(this.state.sortOption) {      
      case 'lowestPrice' : {
        return referenceData.sort((a, b) => a.price - b.price);
      }
      case 'highestPrice': {
        return referenceData.sort((a, b) => b.price - a.price);
      }
      default: {
        return referenceData;
      }
    }
  }

  filterSize = () => {
    const filterSizeData = [];
    
    const {displayData} = this.state;

    this.state.filtered.forEach((size) => {
	    filterSizeData.push(displayData.filter(val => val.availableSizes.includes(size)))
    })
    
    return [...new Set(filterSizeData.flat())];
  }

  handleClick = (e, i) => {
    this.setState({
      cart: [...this.state.cart, i],
    });    
  }

  handleFilter = (e, i) => {
    i = e.target.textContent;
    if(this.state.filtered.includes(i)) return; 
    this.setState({
      filtered: [...this.state.filtered, i],
    }, () => {
      const {filtered, allData} = this.state
      if(filtered.length > 0) {
        this.setState({
          displayData : this.filterSize()
        })
      } else {
        this.setState({
          displayData : allData
        })
      }
    });

  }

  handleSort = (e) => {
    const option = e.target.value;
    this.setState({
      sortOption: option,
    }, () => {
      this.state({
        
      })
    });
  }


  render() {
    // this.checkSortState();

    // const displayData = this.filterSize();
    const {displayData} = this.state
    return (
      <main className="cart-container">
        <div className="size-container">
          <Sizes click={this.handleFilter} data={data}/>
        </div>
        <div className="product-container">
          <Sort change={this.handleSort}/>
          <div className="product-grid">
            { displayData && displayData.map((item, index) =>
            <Product key={index} product={item} click={this.handleClick} />)}
          </div>
        </div>
      </main>
    );
  }
}

export default App;