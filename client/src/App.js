import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop'
// import SigInform from './components/Form/Signin'
import RegForm from './components/Form/Register'
import './App.css';

class App extends Component {
  state = {
    sidebarOpen: false
  }

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen }
    });
  };

  render() {
    let sidebar;
    let backdrop;

    if (this.state.sidebarOpen) {
      sidebar = <Sidebar />
      backdrop = <Backdrop />
    }

    return (
      <>
        <div className="App">
          <Toolbar sidebarClickHandler={this.sidebarToggleClickHandler} />
          {sidebar}
          {backdrop}

          <main style={{ marginTop: '80px' }}>
            <p> Some random text </p>
            <RegForm/>
          </main>
        </div>
      </>
    );
  }
}

export default App;
