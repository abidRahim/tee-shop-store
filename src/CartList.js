import React, { Component } from 'react';
import './CartList.css'
import Cart from './Cart';
import CheckoutProduct from './CheckoutProduct';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      close: true,
    }
  }

  OnClickCloseCart = () => {
    this.props.handleCartDisplay(false);
  }
  
  calculateTotal = () => {
    const {cartSelected} = this.props;
    let total = 0;
    for (var item of cartSelected) {
      total += item.item.price * item.quantity;
    }
    return total;
  }

  render() {
    const { cartSelected } = (this.props);
    
    return (
      <div className="cart-container-box">
        <div className="float-box-right" onClick={this.OnClickCloseCart}>
          <label>
            X
          </label>
        </div>
          <div className="header">
            <div className="cart-head">
              <Cart cartSelected={cartSelected}/> <span className="cart-text">Cart</span>
            </div>
            <div className="cart-body">
            {cartSelected.length !== 0 ? cartSelected.map( (item) => {
              return <CheckoutProduct key={item.item.id} cartItem={item.item} itemQuantity={item.quantity} handleDelete={this.props.handleDelete}/>}) : <div className="message">Add Some Products in the cart <div><p>&nbsp;</p> :)</div></div>}
            </div>
          </div>
          <div className="footer">
            <div className="cart-foot">
              <div>
                <div className="cart-subtotal">
                  <p>SUBTOTAL</p>
                  <div>
                    <span className="checkout-total">$</span><span className="checkout-total">{this.calculateTotal().toFixed(2)}</span>
                  </div>
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
