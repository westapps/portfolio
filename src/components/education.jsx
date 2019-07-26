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
                <div class="block education">
                  <i class="icon-arrow-right"></i> Two years of professional exposure in MERN stack<br />
                  <i class="icon-arrow-right"></i> <span>Extensive use of Node environment using NPM & Mongo DB along with Mongoose.JS to create server side</span><br />
                  <i class="icon-arrow-right"></i> Deep understanding of OAuth 2.0 and OpenID Connect<br />
                  <i class="icon-arrow-right"></i>Working knowledge on Jest unit testing framework and Module bundler Webpack<br />
                  <i class="icon-arrow-right"></i>Experience with the version controls GIT and CI/CD<br />
                  <i class="icon-arrow-right"></i>Experience on building frontend by using REACT/HTML/CSS/JS
                </div>

              </div>
              <div className="col-md-6 col-sm-12 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading animate-box">Education & Training</h2>
                <div class="block education">
                    <i class="icon-home"></i> Beijing University of Aeronautics and Astronautics (Named BEIHANG UNIVERSITY Now) <br />
                    <i class="icon-tag"></i> Major: Mechanical-Electrical Control & Detection, Bachelor’s degree
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
