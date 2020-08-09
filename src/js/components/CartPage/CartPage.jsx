import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles from './CartPageStyles';

class CartPage extends React.Component {

  renderSelectedProducts = () => {
    return this.props.items.map(item => {
      const cheapestVariant = item.variants.sort((a,b) => a.prices.regular - b.prices.regular)[0];
      return (
        <styles.Item key={item.name}>
          <styles.ItemImage src={item.images[0].url}/>
          <div>
            <styles.ItemName>{item.name}</styles.ItemName>
            <styles.ItemPrice>${cheapestVariant.prices.regular.split('.')[0]}</styles.ItemPrice>
          </div>
        </styles.Item>
      );
    });
  }

  getOrderTotal = () => {
    let total = 0;
    this.props.items.forEach(item => {
      const cheapestVariant = item.variants.sort((a,b) => a.prices.regular - b.prices.regular)[0];
      total += parseInt(cheapestVariant.prices.regular);
    });
    return total;
  }

  render() {
    return (
      <styles.CartContainer>
        <styles.Title>Order Summary</styles.Title>
        <styles.ItemsContainer>{this.renderSelectedProducts()}</styles.ItemsContainer>
        <styles.FinalItemPrice>Total: ${this.getOrderTotal()}</styles.FinalItemPrice>
      </styles.CartContainer>
    );
  }
}

CartPage.propTypes = {
  items: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, null)(CartPage);