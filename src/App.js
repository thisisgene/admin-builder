import React, { Component } from 'react';
import arrow from './img/drop_arrow.svg';
import './App.css';


class Nav extends Component {
  
  render() {
    let user = {
      name: 'Gigi Lagusti'
    }
    return (
      <div className="nav">
        <nav>
          <div className="logo">BRAND</div>
          <div className="main-nav">
            <div className="link-item">
              <a>Projects</a>
            </div>
            <div className="link-item">
              <a>Settings</a>
            </div>
          
          </div>
          <div className="user-nav">
            <div className="user-name">
              <span>{user.name}</span>
              <img src={arrow}/>
              <div className="user-dropdown">
                <ul>
                  <li>
                    <a>Settings</a>
                  </li>
                  
                  <li>
                    <a>Log out</a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </nav>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

export default App;
