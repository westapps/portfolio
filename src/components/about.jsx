import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading">Full Stack Technical Skills</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Technologies </h3>
                                        <p>HTML/HTML5, CSS/CSS3, JavaScript, ES6, AJAX, jQuery, JSON, Bootstrap, Restful API, API keys, OAuth, JWT, WebSockets, Express JS, Node.js, React.js, Redux, Redux-Saga</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc rest-tool">
                                        <h3>REST API TOOL</h3>
                                        <p>Postman, api-designer based on RAML specs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc cloud-platform">
                                        <h3>TEST</h3>
                                        <p>Jest, Supertest, TDD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc database">
                                        <h3>DATABASES</h3>
                                        <p>MongoDB, MySQL </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>BACKEND</h3>
                                        <p>Node.js (EventEmitter, async, promise, generator, stream, design pattern: factory, proxy, template, middleware, etc., message queue, WebSockets)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc database">
                                        <h3>VERSION CONTROLS</h3>
                                        <p>Git</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-pt-md">
							<div className="col-md-4 text-center animate-box">
                                <div className="services color-7">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Agile Env</h3>
                                        <p>Docker, CI/CD</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-8">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>DEBUGGING TOOLS</h3>
                                        <p>Chrome Elements Inspector, React Developer Tools</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-9">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc miscellaneous">
                                        <h3>MISCELLANEOUS</h3>
                                        <p>AWS, System & Network</p>
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
