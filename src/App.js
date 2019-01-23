import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import Product from './Product';
import Sizes from './Sizes';
import Sort from './Sort';
import CartList from './CartList';
import Cart from './Cart';
 
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
    const {displayData, sortOption} = this.state;
    const sortDisplayData = [...displayData];

    switch(sortOption) {
      case 'lowestPrice' : {
        return sortDisplayData.sort((a, b) => a.price - b.price);
      }
      case 'highestPrice': {
        return sortDisplayData.sort((a, b) => b.price - a.price);
      }
      default : {
        return displayData;
      }
    }
  }

  filterSize = () => {
    let filterSizeData = [];
    
    const {filtered, allData} = this.state;
    
    filtered.forEach((size) => {
      filterSizeData = [...filterSizeData, allData.filter(val => {
        return val.availableSizes.includes(size); 
      })]
    })
    const newArr =  [...new Set(filterSizeData.flat())];
    return newArr
  }

  handleCartClick = (i) => {
    console.log(i);
    
    this.setState({
      cart: [...this.state.cart, i]
    }); // How is it that on consoling state variables here, it returns one less state value    
  }

  handleFilter = (e, i) => {
    const {filtered} = this.state;
    const filteredArr = [...filtered];
    i = e.target.innerText;

    if(filteredArr.includes(i)) {
      filteredArr.splice(filtered.indexOf(i), 1)
      this.setState({ filtered: filteredArr }, () => {
        this.filteredDisplayData();
      })
    } else {
      this.setState({
        filtered: [...filteredArr, i],
      }, () => {
        this.filteredDisplayData();
      });
    }
  }

  filteredDisplayData = () => {
    const {filtered, allData} = this.state

    if(filtered.length > 0) {
      this.setState({
        displayData : this.filterSize()
      })
    } else {
      this.setState({
        displayData : allData
      });
    }
  }

  handleSort = (e) => {
    const option = e.target.value;   
    
    this.setState({
      sortOption: option,
    }, () => {
        this.setState({
          displayData: this.checkSortState(),
        });
      }
    );
  }


  render() {
    const {allData, displayData, filtered, cart} = this.state;

    return (
      <div>
        <Cart classname="cart-notification" cartSelected={cart}/>
        <CartList cartSelected={cart}/>
        <main className="cart-container">
          <div className="size-container">
            <Sizes click={this.handleFilter} selectedSizes={filtered} data={data}/>
          </div>
          <div className="product-container">
            <Sort change={this.handleSort}/>
            <div className="product-grid">
              { displayData && displayData.map((item, index) =>
              <Product key={index} product={item} click={this.handleCartClick} />)}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;