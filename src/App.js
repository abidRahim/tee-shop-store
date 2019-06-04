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
      sortOption: null,
      displayCart: false,
    }
  }

  checkSortState = (sortData) => {
    const { sortOption } = this.state;

    switch (sortOption) {
      case 'lowestPrice': {
        return sortData.sort((a, b) => a.price - b.price);        
      }
      case 'highestPrice': {
        return sortData.sort((a, b) => b.price - a.price);
      }
      default: {
        return sortData.sort((a, b) => b.id - a.id);
      }
    }
  }

  filterSize = () => {
    let filterSizeData = [];

    const { filtered, allData } = this.state;

    filtered.forEach((size) => {
      filterSizeData = [...filterSizeData, allData.filter(val => {
        return val.availableSizes.includes(size);
      })]
    })
    const newArr = [...new Set(filterSizeData.flat())];
    return this.checkSortState(newArr);
  }

  handleAddToCartClick = (i) => {
    const { cart } = this.state;

    const cartCopy = [...cart];
    let flag = true;
    for (var obj of cartCopy) {
      if (obj.item.id === i.id) {
        obj.quantity++; flag = false;
      }
    }

    if (flag) cartCopy.push({ item: i, quantity: 1 })
    this.setState({
      cart: [...cartCopy]
    })
  }

  handleFilter = (e, i) => {
    const { filtered } = this.state;
    const filteredArr = [...filtered];
    i = e.target.innerText;

    if (filteredArr.includes(i)) {
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
    const { filtered, allData } = this.state;

    if (filtered.length > 0) {
      this.setState({
        displayData: this.filterSize(),
      }, )
    } else {
      this.setState({
        displayData: allData
      });
    }
  }

  handleSort = (e) => {
    const option = e.target.value;
    const { displayData } = this.state;

    this.setState({
      sortOption: option,
    }, () => {
      const sorted = this.checkSortState(displayData);
      this.setState({
        displayData: sorted,
      });
    }
    );
  }

  handleDelete = (e, id) => {
    const { cart } = this.state;
    let tempCart = [...cart];
    tempCart = tempCart.filter((val) => val.item.id !== id);

    this.setState({
      cart: tempCart,
    });
  }

  handleCartDisplay = (displayCart) => {
    this.setState({
      displayCart
    })
  }


  handleEscape = (event) => {
    event.preventDefault();
    if (event.defaultPrevented) {
      return;
    }
    var key = event.key || event.keyCode;
    console.log(key);
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      this.setState({
        displayCart: false,
      });
    }
  }


  render() {
    const { displayData, filtered, cart, displayCart } = this.state;

    return (
      <div>
        <Cart cartSelected={cart} handleCartDisplay={this.handleCartDisplay} />
        <div onKeyPress={this.handleEscape} className={displayCart ? "cart-open-container fixed" : "cart-close-container fixed"}>
          <CartList cartSelected={cart} handleDelete={this.handleDelete} handleCartDisplay={this.handleCartDisplay} />
        </div>
        <main className="cart-container">
          <div className="size-container">
            <Sizes click={this.handleFilter} selectedSizes={filtered} data={data} />
          </div>
          <div className="product-container">
            <Sort change={this.handleSort} displayData={displayData} />
            <div className="product-grid">
              {displayData && displayData.map((item, arr) =>
                <Product key={item.id} product={item} click={this.handleAddToCartClick} length={arr.length} />)}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;