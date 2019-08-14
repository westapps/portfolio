import React, { Component } from 'react'

export default class Assessment extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="assessment">
					<div className="container-fluid">
          <h2 className="colorlib-heading">Skills Assessments on Pluralsight.com</h2>
            <div className="row">
              <div className="col-md-6 gallery_gap">
                <img src="images/javascript_assessment.jpg" className="gallery" alt="Demo"></img>
              </div>
              <div className="col-md-6 gallery_gap">
                <img src="images/nodejs.assessment.jpg" className="gallery" alt="Demo"></img>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 gallery_gap">
                <img src="images/html5_assessment.jpg" className="gallery" alt="Demo"></img>
              </div>
              <div className="col-md-6 gallery_gap">
                <img src="images/react_assessment.jpg" className="gallery" alt="Demo"></img>
              </div>
            </div>
          </div>
				</section>
      </div>
    )
  }
}
