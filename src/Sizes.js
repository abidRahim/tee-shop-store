import React, { Component } from 'react';
import './Sizes.css';

class ProductSizes extends Component {
  currentSize = () => {
    const {selectedSizes} = this.props;
    if (Object.values(selectedSizes).includes(this.props.item)) {
      return (this.props.item);
    } else {
      return "";
    }    
  }
  
  render() {
    // console.log(this.props.selectedSizes); // Why 14 times ?
    
    return (
        <div className={`size-btn ${this.currentSize()}`}  onClick={(e) => this.props.click(e)}><p>{this.props.item}</p></div>
    )
  }
}

class Sizes extends Component {
  render() {
    var product = this.props.data;
    const productSizes = product.products.map(item => item.availableSizes).reduce((acc, cur) => acc.concat(cur) ,[]);
    const availableSizesArr = [...new Set(productSizes)].filter(val => val !== "X");
    
    return (
      <section className="size-filter">
        <h2>Sizes:</h2>
        <div className="size-array">
          { availableSizesArr && availableSizesArr.map((item, index) => 
            <ProductSizes key={index} item={item} selectedSizes={this.props.selectedSizes} click={this.props.click} />) }
        </div>
      </section>
    )
  }
}

export default Sizes;