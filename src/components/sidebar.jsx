import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/simon.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">SIMON XIE</a></h1>
              <h4>Full Stack Developer</h4>
              <span className="email"><i className="icon-phone"></i> 0415 809 789</span> <br/>
              <span className="email"><i className="icon-mail"></i> simon.fuxi.xie@gmail.com</span><br/>
              <span className="email"><i className="icon-home"></i> Hamersley (Perth), WA</span><br/>
              <span className="email"><i className="icon-arrow-right"></i> Permanent Resident</span><br/>
            </div>
            <br/>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#education" data-nav-section="education">Summary & Education</a></li>
                  <li><a href="#about" data-nav-section="about">Technical Skills</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Qualification & Certificates</a></li>
                  <li><a href="#spareLearning" data-nav-section="spareLearning">Spare Time Learning</a></li>
                  <li><a href="#projects" data-nav-section="projects">Hobby Projects</a></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
