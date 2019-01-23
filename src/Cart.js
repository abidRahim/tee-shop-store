import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  
  render() {    
    const {cartSelected} = this.props;
    return (
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <div className="circle-notification"><span>{cartSelected.length}</span></div>
      </div>
    );
  }
}

export default Cart;