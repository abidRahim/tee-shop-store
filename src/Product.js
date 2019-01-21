import React, { Component } from 'react';

class Product extends Component {
  render() {
    const {id, sku, title, price, currencyFormat} = this.props.product;
    
    return(
      <div className="product-card">
        <img src={require(`../products/${sku}_2.jpg`)} alt={title}/>
        <h3>{title}</h3>
        <div className="price-tag">
          <span>{currencyFormat}</span>
          <p>{price}</p>
        </div>
        <button className="addToCartBtn" onClick={(e) => this.props.click(e, id)}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;