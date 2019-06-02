import React, { Component } from 'react';
import FreeShipping from './FreeShipping';
import './App.css'
import './Product.css'

class Product extends Component {
  render() {
    const {sku, title, price, currencyFormat, isFreeShipping} = this.props.product;
    return(
      <div className="product-card">
        { isFreeShipping? <FreeShipping /> : null }
        <img src={require(`../products/${sku}_1.jpg`)} alt={title}/>
        <p className="product-title">{title}</p>
        <div className="price-tag">
          <span>{currencyFormat}</span>
          <p>{price}</p>
        </div>
        <button className="addToCartBtn checkout-btn" onClick={() => this.props.click(this.props.product)}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;