import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import * as styles from './ModalStyles';

class ProductModal extends React.Component {
  render() {
    const { product, history, isOpen, closeModal } = this.props;
    return (
      <Modal 
        isOpen={isOpen} 
        style={{
          content: {
            margin: 'auto',
            width: '70%',
            height: '50%',
            maxWidth: 600,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }
        }}
      >
        <styles.ExitButtonContainer>
          <styles.ExitButton onClick={() => closeModal()}>
            <CloseIcon/>
          </styles.ExitButton>
        </styles.ExitButtonContainer>
        <styles.ContentContainer>
          <styles.Title>{product.name}</styles.Title>
          <styles.Description>{product.description}</styles.Description>
          <styles.ManufacturerContainer>
            <styles.Text>Manufacturer: {product.manufacturer && product.manufacturer.name}</styles.Text>
            <styles.Text>Location: {product.manufacturer && product.manufacturer.location}</styles.Text>
          </styles.ManufacturerContainer>
          <styles.AddToCart 
            onClick={() => {
              this.props.addItemToCart(product);
              history.push('/cart');
            }}
          >
            <div style={{ marginRight: 16 }}>Add To Cart </div>
            <ShoppingCartIcon/>
          </styles.AddToCart>
        </styles.ContentContainer>
      </Modal>
    );
  }
}

ProductModal.propTypes = {
  addItemToCart:PropTypes.func,
  product: PropTypes.array,
  history: PropTypes.object,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.bool,
};

export default ProductModal;