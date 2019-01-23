import React, { Component } from 'react';
import './CartList.css'
import Cart from './Cart';
import CheckoutProduct from './CheckoutProduct';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.cartSelected = this.props.cartSelected;
  }

  cartDisplayData = () => {
    // return this.allData.filter((val) => this.cartSelected.includes(val));
  }
  
  render() {    
    return (
      <div className="cart-container-box">
        <div className="cart-head">
          <Cart cartSelected={this.props.cartSelected}/> <span className="cart-text">Cart</span>
        </div>
        <div className="cart-body">
          <CheckoutProduct cartDisplay={this.cartDisplayData()}/>
        </div>
        <div>
          <div className="cart-foot">
            <div>
              <p>SUBTOTAL</p>
              <div>
                <span className="checkout-total"></span>
              </div>
            </div>
            <button className="checkout-btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;