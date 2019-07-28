import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default class PieChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      series: [{
        data: [
            {
              name: 'JavaScript',
              y: 15.00,
              color: '#3498db'
            },
            {
              name: 'React / React Native',
              y: 15.00,
              color: '#9b59b6'
            },
            {
              name: 'Express',
              y: 8.00,
              color: '#2ecc71'
            },
            {
              name: 'RESTful API',
              y: 12.50,
              color: '#f1c40f'
            },
            {
              name: 'HTML/CSS',
              y: 12.50,
              color: 'pink'
            },
            {
              name: 'MongoDB',
              y: 5.00,
              color: 'yellow'
            },
            {
              name: 'Node Js',
              y: 12.50,
              color: 'red'
            },
            {
              name: 'Shopify Liquid',
              y: 8.00,
              color: 'gray'
            }]
        }]
    }
  }

  render() {
    const options = {
      chart: {
        type: 'pie',
        renderTo: 'spare2016'
      },
      title: {
        text: '2016-2017'
      },
      plotOptions: {
        pie: {
          dataLabels: {
              format: '{point.name}'
          },
          innerSize: '50%'
        }
      },
      series: this.state.series
    };

    return (
        <div id="spare2016">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
  }
}
