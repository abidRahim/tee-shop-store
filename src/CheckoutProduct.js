import React, {Component} from 'react';
import './CheckoutProduct.css';

class CheckoutProduct extends Component {
  render() {
    const {id, sku, title, availableSizes, style, currencyFormat, price} = (this.props.cartItem);
    
    return (
      <div className="cart-item-container">
        <i className="float-right fas fa-times fa-lg" onClick={(e) => { this.props.handleDelete(e, id)}}></i>
        <div className="cart-item-info">
          <img className="checkout-img" src={require(`../products/${sku}_1.jpg`)} alt={title}/>
          <div className="item-info">
            <p className="checkout-title">{title}</p>
            <div className="group-item-detail">
              <p className="checkout-size">{availableSizes[0]}  </p>
              <span className="separator">|</span>
              <p className="checkout-style">  {style}</p> 
            </div>            
            <p className="checkout-quantity hilight"><span>Quantity: </span><span className="hilight">{this.props.itemQuantity}</span></p>
          </div>
        </div>
        <div className="checkout-price"><span>{currencyFormat}</span>{price}<span></span></div>
      </div>
    )
  }
}

export default CheckoutProduct;