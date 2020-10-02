import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Backdrop from './components/Backdrop/Backdrop'
// import SigInform from './components/Form/Signin'

import './App.css';

import RegForm from './components/Form/Register';
import AllDishComponent from './components/AllDish/AllDishComponent';
import CartPage from './components/Cart/CartPage';

class App extends Component {

  render() {


    return (


      <div className="App">
        <Switch>
          <Route exact path="/" component={RegForm} />
          <Route path="/dishes" render={() => <AllDishComponent />} />
          <Route path="/cart" render={() => <CartPage />} />
        </Switch>
      </div>

    );
  }
}

export default App;
