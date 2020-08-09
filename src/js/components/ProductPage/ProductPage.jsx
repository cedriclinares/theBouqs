import React from 'react';
import ProductModal from '../Modal/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { SaveCategories, AddItemToCart } from '../../actions/appActions';
import * as styles from './ProductPageStyles';

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showDropdown: false,
      modalProduct: {},
      windowWidth: 0,
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.getProductApi();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  };

  getProductApi = () => {
    fetch('http://localhost:8081/api/categories')
      .then(response => response.json())
      .then(responseJson => {
        this.props.saveCategories(responseJson);
      });
  }

  renderDropdown() {
    return this.props.categories.map(category => {
      return (
        <option 
          key={category.name}
          onClick={() => {
            this.props.history.push(`/categories/${category.slug}`);
          }}
          value={category.slug}
        >
          {category.name}
        </option>
      );
    });

  }

  renderHeader() {
    const { match } = this.props;
    const selected = match.params && match.params.category || 'all';
    return window.innerWidth > 425 ? (
      <styles.HeaderContainer>
        <styles.HeaderItem justifyContent='flex-start'>
          <styles.SelectedCategory 
            value={selected}
            onChange={e => this.props.history.push(`/categories/${e.target.value}`)}
          >
            {this.renderDropdown()}
          </styles.SelectedCategory>
        </styles.HeaderItem>
        <styles.HeaderTitle> Flowers </styles.HeaderTitle>
        <styles.HeaderItem justifyContent='flex-end'>
          <ShoppingCartIcon 
            onClick={() => this.props.history.push('/cart')}
            style={{ cursor: 'pointer' }}/>
        </styles.HeaderItem>
      </styles.HeaderContainer>
    ) :  (
      <styles.MobileHeaderContainer>
        <styles.MobileHeaderTitle>
          <styles.HeaderTitle> Flowers </styles.HeaderTitle>
          <styles.MobileHeaderItem justifyContent='flex-end'>
            <ShoppingCartIcon 
              onClick={() => this.props.history.push('/cart')}
              style={{ cursor: 'pointer' }}/>
          </styles.MobileHeaderItem>
        </styles.MobileHeaderTitle>
        <styles.SelectedCategory 
          value={selected}
          onChange={e => this.props.history.push(`/categories/${e.target.value}`)}
        >
          {this.renderDropdown()}
        </styles.SelectedCategory>
      </styles.MobileHeaderContainer>
    );
  }

  getCategory() {
    const { categories, match } = this.props;
    for (let i=0; i<categories.length; i+=1) {
      const category = categories[i];
      if (match.params && category.slug === match.params.category) {
        return category;
      } else if (Object.keys(match.params).length === 0 && category.slug === 'all') {
        return category;
      }
    }
    
  }

  renderProducts() {
    const category = this.getCategory();
    return category.products.map((product, idx) => {
      let cheapestVariant = product.variants.sort((a,b) => a.prices.regular - b.prices.regular)[0];
      return (
        <styles.ProductContainer 
          key={`${product.name}${idx}`}
          onClick={() => this.setState({
            showModal: true,
            modalProduct: product,
            modalDescription: product.description,
            modalManu: product.manufacturer.name,
            modalLocation: product.manufacturer.location
          })}
        > 
          <styles.ProductImg
            src={product.images[0].url}
          />
          <styles.ProductTextContainer>
            <styles.ProductText style={{ marginRight: 8 }}>{product.name}</styles.ProductText>
            <styles.ProductText style={{ textAlign: 'right' }}>${cheapestVariant.prices.regular.split('.')[0]}</styles.ProductText>
          </styles.ProductTextContainer>
        </styles.ProductContainer>
      );
    });
  }

  renderProductRows() {
    const products = this.renderProducts();
    console.log(products);
    const productRows = [];
    let currRow = [];
    let maxItemsPerRow = 3;
    if (window.innerWidth <= 425) {
      maxItemsPerRow = 1;
    } else if (window.innerWidth <= 768) {
      maxItemsPerRow = 2;
    }
    products.forEach(product => {
      if (currRow.length < maxItemsPerRow) {
        currRow.push(product);
      } else {
        productRows.push(
          <styles.ProductRow style={{display: 'flex', flexDirection: 'row'}}>{currRow}</styles.ProductRow>
        );
        currRow = [product];
      }
    });
    while(maxItemsPerRow-currRow.length !== 0) {
      currRow.push(<styles.ProductContainer/>);
    }
    productRows.push(
      <styles.ProductRow 
        style={{display: 'flex', flexDirection: 'row'}}
      >
        {currRow}
      </styles.ProductRow>
    );
    return productRows;
  }

  render() {
    const { addItemToCart, categories, history} = this.props;
    return (
      <div style={{ backgroundColor: '#FAF0DC' }}>
        {categories.length > 0 && (
          <>
            <div>{this.renderHeader()}</div>
            <div>{this.renderProductRows()}</div>
            <ProductModal 
              isOpen={this.state.showModal}
              closeModal={() => {
                this.setState({ showModal: false });
              }}
              history={history}
              product={this.state.modalProduct}
              addItemToCart={item => addItemToCart(item)}
            />
          </>
        )}
      </div>
    );
  }
}

ProductPage.propTypes = {
  addItemToCart: PropTypes.func,
  categories: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.object,
  saveCategories: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(AddItemToCart(item)),
    saveCategories: categories => dispatch(SaveCategories(categories))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);