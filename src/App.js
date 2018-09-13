import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'

import fakeServerData from './fakeServerData.json'

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    this.setState({serverData: fakeServerData})
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? 
          <Router>
            <div>
              <Header user={this.state.serverData.user[0]}/>
              <main>
                <Route path={"/main/:site"} render={
                  (props) => <MainPage {...props} serverData={this.state.serverData} />
                } />

                {/* <MainPage serverData={this.state.serverData} />                 */}
              </main>
            </div>
           </Router>
        :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
