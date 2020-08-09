import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ProductPage from './components/ProductPage/ProductPage';
import CartPage from './components/CartPage/CartPage';
import appReducer from './reducers/appReducer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/categories/:category" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route exact path="/" component={ProductPage} />
      </Router>
    );
  }
}

let store = createStore(appReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('app'),
);
