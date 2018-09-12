import React, { Component } from 'react';
import './ProjectList.css';
import config from '../../adminConfig.json'


class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        <p>{config.projectData[0].listTitle}</p>
        <div>
          <input type="text"/>
          <button>{config.projectData[0].submitTitle}</button>
        </div>
        <div>
          <ul>
            {
              this.props.projects.map((project, index) => {
                return <li key={index}>{project.name}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectList;
