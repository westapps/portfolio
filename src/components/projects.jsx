import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3" >
								<span className="heading-meta"></span>
								<h2 className="colorlib-heading animate-box">Hobby Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4" >
								<div className="project" style={{backgroundImage: 'url(images/projects_01_xcoins.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://www.xcoins.site/">Crypto market</a></h3>
											<span>React App</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="project" style={{backgroundImage: 'url(images/projects_02_jenkins.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://jenkins.simonxie.dev/">Jenkins</a></h3>
											<span>Jenkins CI/CD</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="project" style={{backgroundImage: 'url(images/projects_03_formcreator.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://formcreator.simonxie.dev">Form Creator</a></h3>
											<span>React App, Node.JS, MongoDB</span>											
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
