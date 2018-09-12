import React, { Component } from 'react';
import arrow from '../../img/drop_arrow.svg';
import './Header.css';
import config from '../../adminConfig.json'
import fakeServerData from '../../fakeServerData.json'

class Header extends Component {
  
  render() {
    return (
      <div className="nav">
        <nav>
          <div className="logo">BRAND</div>
          <div className="main-nav">
            {config.menu_items.map((item, index) => {
              return (
                <div className="link-item" key={index}>
                  <a>{item.title}</a>
                </div>
              )
            })}
          
          </div>
          <div className="user-nav">
            <div className="user-name">
              <span>{fakeServerData.user[0].name}</span>
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