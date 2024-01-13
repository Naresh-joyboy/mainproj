import React from 'react'
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
const config = {
    type: 'doughnut',
    data: data,
  };

const Chart = () => {
  return (
    <div> 
    <Doughnut
    data = {
        {labels:[
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
    }}
      />
      </div>
  )
}

export default Chart