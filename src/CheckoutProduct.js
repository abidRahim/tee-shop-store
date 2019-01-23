import React, {Component} from 'react';
import './CheckoutProduct.css';

class CheckoutProduct extends Component {
  constructor(props){
    super(props);
    console.log(this.props.cartData);    
  }

  render() {
    return (
      <div>
        <div> <img /> </div>
        <div>
          <p className="checkout-title"></p>
          <p className="checkout-size"></p>
          <p className="checkout-style"></p>
          <p className="checkout-style"><span>Quantity:</span></p>
        </div>
        <div className="checkout-price"><span></span></div>
      </div>
    )
  }
}

export default CheckoutProduct;