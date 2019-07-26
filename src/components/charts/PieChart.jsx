import React, { Component } from 'react'
import Highcharts from 'highcharts';

export default class PieChart extends Component {
    
    highChartsRender() {
        Highcharts.chart({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                renderTo: 'spare2015'
              },
              title: {
                text: '2015'
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>',
                    style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                  }
                }
              },
              series: [{
                colorByPoint: true,
                data: [{
                  name: 'Python',
                  y: 90.41,
                  sliced: true,
                  selected: true
                }, {
                  name: 'Pandas Python',
                  y: 90.41,
                }, {
                  name: 'Google TensorFlow',
                  y: 90.41,
                }, {
                  name: 'Data analysis & Statistics',
                  y: 90.41,
                }, {
                  name: 'Machine learning / Deep learning',
                  y: 90.41,
                }]
              }]
          });
    }
    componentDidMount() {
        this.highChartsRender();
      }
  render() {
    return (
        <div id="spare2015">
        </div>
    )
  }
}
