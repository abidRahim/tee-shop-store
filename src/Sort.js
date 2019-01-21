import React, { Component } from 'react';
import './App.css';

class Sort extends Component {
  render() {
    return (
      <div className="sort-container">
        <small className="products-found">
          <span>{} Product(s) found</span>
        </small>
        <div className="select-sort">
          Order By:
          <select className="select-options" onChange={(e) => this.props.change(e)}>
            <option value="select">Select</option>
            <option value="lowestPrice">Lowest to Highest</option>
            <option value="highestPrice">Highest to Lowest</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Sort;