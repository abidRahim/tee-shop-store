import React, { Component } from 'react';import './Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.toggle = true;
  }
  
  totalItemQuantity = (cartItem = this.props.cartSelected)  => {
    let itemQty = 0;
    
    cartItem.forEach( (value) => itemQty += value.quantity);
    return itemQty;
  }

  handleCartOnClick = () => {
    this.props.handleCartDisplay(true);
  }
  
  render() {
    const { handleCartDisplay } = this.props;
    
    return (
      <div className="cart-notification" onClick={handleCartDisplay !== undefined ? this.handleCartOnClick : null}>
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <div className="circle-notification"><span>{this.totalItemQuantity()}</span></div>
        </div>
      </div>
    );
  }
}

export default React.memo(Cart);