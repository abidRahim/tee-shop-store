import React, { Component } from 'react';

class ProductSizes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="sizeBtn {this.props.item}"  onClick={(e) => this.props.click(e)}><p>{this.props.item}</p></div>
      </div>
    )
  }
}

class Sizes extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    var product = this.props.data;

    const productSizes = product.products.map(item => item.availableSizes).reduce((acc, cur) => acc.concat(cur) ,[]);
    const availableSizesArr = [... new Set(productSizes)].filter((val) => !val === "X");
    

    return (
      <div>
        <h2>Sizes:</h2>
          {availableSizesArr.map(function (item) {
            <ProductSizes item={item} click={this.props.click} />
          })
        }
      </div>
    )
  }
}

export default Sizes;