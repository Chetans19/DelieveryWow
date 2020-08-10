import React, { Component } from 'react';


import Backdrop from './components/Backdrop/Backdrop'
// import SigInform from './components/Form/Signin'
import RegForm from './components/Form/Register'
import './App.css';
import AllDishComponent from './components/AllDish/AllDishComponent';

class App extends Component {
 

  

  render() {
    

    return (
      <>
        <div className="App">
        

          <main style={{ marginTop: '80px' }}>
            <p> Some random text </p>
            <RegForm/>
          </main>
      <AllDishComponent />
        </div>
      </>
    );
  }
}

export default App;
