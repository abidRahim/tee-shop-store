import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
  render() {
    const {sku, title, price, currencyFormat} = this.props.product;
    
    return(
      <div className="product-card">
        <img src={require(`../products/${sku}_2.jpg`)} alt={title}/>
        <h3>{title}</h3>
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