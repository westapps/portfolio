import React, { Component } from 'react'
import Highcharts from 'highcharts';

export default class PieChart extends Component {
    
    highChartsRender() {
      Highcharts.chart({
        chart: {
          type: 'pie',
          renderTo: 'spare2016'
        },
        title: {
          text: '2016'
        },
        plotOptions: {
          pie: {
            dataLabels: {
                format: '{point.name}'
            },
            innerSize: '50%'
          }
        },
        series: [{
          data: [
              {
                name: 'JavaScript',
                y: 90.41,
                color: '#3498db'
              },
              {
                name: 'React / React Native',
                y: 90.41,
                color: '#9b59b6'
              },
              {
                name: 'Express',
                y: 90.41,
                color: '#2ecc71'
              },
              {
                name: 'RESTful API',
                y: 90.41,
                color: '#f1c40f'
              },
              {
                name: 'HTML/CSS',
                y: 90.41,
                color: 'pink'
              },
              {
                name: 'MongoDB',
                y: 90.41,
                color: 'yellow'
              },
              {
                name: 'Node Js',
                y: 90.41,
                color: 'red'
              },
              {
                name: 'Shopify Liquid',
                y: 90.41,
                color: 'gray'
              }
          ]
      }]
    });
    
    }
    
    componentDidMount() {
        this.highChartsRender();
      }
  render() {
    return (
        <div id="spare2016">
        </div>
    )
  }
}
