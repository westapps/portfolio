import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Timeline from './components/timeline';
import SpareLearning from './components/spareLearning';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				  <div id="colorlib-main">
  					<Introduction></Introduction>
            <Education/>
  					<About></About>
  					<Timeline></Timeline>
            <SpareLearning/>
            <Experience/>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
