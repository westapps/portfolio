import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default class PieChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      series: [{
        colorByPoint: true,
        data: [{
          name: 'Python',
          y: 20.00,
          color: '#3498db',
          sliced: true,
          selected: true
        }, {
          name: 'Pandas Python',
          y: 25.00,
          color: '#9b59b6'
        }, {
          name: 'Google TensorFlow',
          y: 15.00,
          color: '#2ecc71'
        }, {
          name: 'Data analysis & Statistics',
          y: 15.00,
          color: '#f1c40f'
        }, {
          name: 'Machine learning / Deep learning',
          y: 25.00,
          color: '#9b59b6'
        }]
      }]
    }
  }




  render() {
    const options = {
      chart: {
          type: 'pie'
        },
        title: {
          text: '2015-2016'
        },
        series: this.state.series
    }

    return (
        <div id="spare2015">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
  }
}
