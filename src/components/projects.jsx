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
                        <a href="https://www.xcoins.site/"><div className="tes-con-sc ai"><img src="images/projects_01_xcoins.jpg" alt="Demo"/></div>
                          <div className="tes-con-name ai">React App</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="https://jenkins.simonxie.dev/">
                          <div className="tes-con-sc ai"><img src="images/projects_02_jenkins.jpg" alt="Demo"/></div>
                          <div className="tes-con-name ai">Jenkins CI/CD</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12" style={{paddingTop:'30px'}}>
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="https://formcreator.simonxie.dev/en/register">
                          <div className="tes-con-sc ai"><img src="images/projects_03_formcreator.jpg" alt="Demo"/></div>
                          <div className="tes-con-name ai">React, NodeJS, MongoDB</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12" style={{paddingTop:'30px'}}>
                    <div className="ric-bdy-con-ai">
                      <div className="tes-content ai">
                        <a href="#">
                          <div className="tes-con-sc ai"><img src="images/projects_04_qrcode.jpg" alt="Demo"/></div>
                          <div className="tes-con-name ai">React Native</div>
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
