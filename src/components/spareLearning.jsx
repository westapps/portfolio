import React, { Component } from 'react'
import PieChart from './charts/PieChart';
import RadiusPie from './charts/RadiusPie';

export default class SpareLearning extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="spareLearning">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta"></span>
                                <h2 className="colorlib-heading animate-box">Spare Time Learning</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                              <PieChart />
                            </div>
                            <div className="col-md-6">
                              <RadiusPie />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
