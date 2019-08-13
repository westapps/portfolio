import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-sm-12 animate-box" data-animate-effect="fadeInLeft">
                  <span className="heading-meta"></span>
                  <h2 className="colorlib-heading animate-box">Summary</h2>
                  <div className="block education">
                    <i className="icon-arrow-right"></i> Two years of professional exposure in MERN stack<br />
                    <i className="icon-arrow-right"></i> <span>Extensive use of Node environment using NPM & Mongo DB along with Mongoose.JS to create server side</span><br />
                    <i className="icon-arrow-right"></i> Deep understanding of OAuth 2.0 and OpenID Connect<br />
                    <i className="icon-arrow-right"></i>Working knowledge on Jest unit testing framework and Module bundler Webpack<br />
                    <i className="icon-arrow-right"></i>Experience with Git, Docker and Jenkins CI/CD<br />
                    <i className="icon-arrow-right"></i>Experience on building frontend by using REACT/React Native/HTML/CSS/JS
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 animate-box" data-animate-effect="fadeInLeft">
                  <span className="heading-meta"></span>
                  <h2 className="colorlib-heading animate-box">Education & Training</h2>
                  <div className="block education">
                      <i className="icon-home"></i> Beijing University of Aeronautics and Astronautics (Named BEIHANG UNIVERSITY Now) <br />
                      <i className="icon-tag"></i> Major: Mechanical-Electrical Control & Detection, Bachelor’s degree <br />
					            <i className="icon-bookmark"></i> 1/3 of subjects are computer-science-related
                  </div>
                </div>
              </div>
            <div className="row">
            </div>
          </div>
        </section>
      </div>
    )
  }
}
