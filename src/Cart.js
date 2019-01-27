import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  totalItemQuantity = (cartItem = this.props.cartSelected)  => {
    let itemQty = 0;
    
    cartItem.forEach( (value) => itemQty += value.quantity);
    return itemQty;
  }
  
  render() {    
    const {cartSelected} = this.props;
    return (
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <div className="circle-notification"><span>{this.totalItemQuantity()}</span></div>
      </div>
    );
  }
}

export default Cart;