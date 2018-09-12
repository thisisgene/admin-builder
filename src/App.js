import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import ProjectList from './components/ProjectList/ProjectList'
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
          <div>
            <Header user={this.state.serverData.user[0]}/>
            <main>
              <ProjectList projects={this.state.serverData.user[0].projects}/>
    
            </main>
          </div>
        :
          <p>Loading...</p>
        
      
        }
        
      </div>
    );
  }
}

export default App;
