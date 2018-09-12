import React, { Component } from 'react';
import arrow from '../../img/drop_arrow.svg';
import './Header.css';
import config from '../../adminConfig.json'

class Header extends Component {
  
  render() {
    
    return (
      <div className="nav">
        <nav>
          <div className="logo">{config.brand[0].name}</div>
          <div className="main-nav">
            {config.menuItems.map((item, index) => {
              return (
                <div className="link-item" key={index}>
                  <a>{item.title}</a>
                </div>
              )
            })}
          </div>
          <div className="user-nav">
            <div className="user-name">
              <span>{this.props.user.name}</span>
              <img src={arrow} alt="dropdown arrow"/>
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

export default Header