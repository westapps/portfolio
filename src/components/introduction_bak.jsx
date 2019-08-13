import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li className="" style={{backgroundImage:'url(images/bgimg.png)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight" >
                        <div className="desc">
                          <h1 style={{color:'#fa0f46'}} >Hi! <br />I'm SIMON</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="" style={{backgroundImage:'url(images/bgimg.png)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner" >
                        <div className="desc">
                          <h3 style={{color:'#fa0f46'}} >I'm a Full Stack Developer with extensive experience in building high-quality React Apps with Node backend.</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
