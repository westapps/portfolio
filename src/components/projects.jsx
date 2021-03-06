import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div style={{paddingTop:'60px'}}>
				<section className="colorlib-work" data-section="projects" >
          <div className="colorlib-narrow-content">
            <div className="container">
              <div className="tic-head">
                <h3>Hobby Projects</h3>
                <p></p>
              </div>
              <div className="tic-body">

                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="https://www.xcoins.site/" target="_blank" rel="noopener noreferrer">
                          <div className="tes-con-sc ai"><img src="images/projects_01_xcoins.jpg" alt="xcoins"/></div>
                          <div className="tes-con-name ai">Crypto market: React App,  Socket.io</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="https://jenkins.simonxie.dev/" target="_blank" rel="noopener noreferrer">
                          <div className="tes-con-sc ai"><img src="images/projects_02_jenkins.jpg" alt="jenkins"/></div>
                          <div className="tes-con-name ai">Jenkins: CI/CD</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12" style={{paddingTop:'30px'}}>
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="https://formcreator.simonxie.dev/en/register" target="_blank" rel="noopener noreferrer">
                          <div className="tes-con-sc ai"><img src="images/projects_03_formcreator.jpg" alt="formcreator"/></div>
                          <div className="tes-con-name ai">Form Creator: React, NodeJS, MySQL</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12" style={{paddingTop:'30px'}}>
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="#qrcode" target="_blank" rel="noopener noreferrer">
                          <div className="tes-con-sc ai"><img src="images/project_04_x_messenger.png" alt="x-messenger-app"/></div>
                          <div className="tes-con-name ai">X-Messenger: React Native, Socket.io, Redis, NodeJS, MongoDB, AWS S3</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12" style={{paddingTop:'30px'}}>
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="http://www.west-apps.com" target="_blank" rel="noopener noreferrer">
                          <div className="tes-con-sc ai"><img src="images/projects_05_westapps.jpg" alt="westapps"/></div>
                          <div className="tes-con-name ai">AI/AR Service Provider: React, NodeJS, MongoDB</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12" style={{paddingTop:'30px'}}>
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="#mdrive" target="_blank" rel="noopener noreferrer">
                          <div className="tes-con-sc ai"><img src="images/projects_07_mdrive.jpg" alt="mdrive"/></div>
                          <div className="tes-con-name ai">mDrive: React Native, MySQL, NodeJS</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
				</section>
      </div>
    )
  }
}
