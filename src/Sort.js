import React, { Component } from 'react';
import './App.css';

class Sort extends Component {
  render() {
    const {displayData} = this.props;
    return (
      <div className="sort-container">
        <p className="products-found">
          <span>{displayData.length} Product(s) found</span>
        </p>
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