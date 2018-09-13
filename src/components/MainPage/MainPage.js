import React, { Component } from 'react'
import ProjectList from '../ProjectList/ProjectList'
import ProjectText from '../ProjectText/ProjectText'

const MainPage = (props) => {
  const site = props.match.params.site
  return (
    
    <div>
      <h1>Hello: {site}</h1>
      <ProjectList projects={props.serverData && props.serverData.user[0][site]}/>
      <div className="ProjectContent">
        <ProjectText />
      </div>
      <h1>Hi, {props.serverData.user[0].name}</h1>
    </div>
  )
  }

export default MainPage