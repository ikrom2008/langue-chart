import * as React from 'react'
import './Chart.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BarChart } from '@mui/x-charts';

ChartJS.register(ArcElement, Tooltip, Legend);


function Chart({product}) {
  let oneproduct = product?.products?.slice(0,6)
  let oneproduct2 = product?.products?.slice(6,10)
  let oneproduct3 = product?.products?.slice(10,14)
  let oneproduct4 = product?.products?.slice(14,18)
  let oneproduct5 = product?.products?.slice(18,22)
  const data = {
  labels: oneproduct?.map((item) => {
    return item.title.slice(0,10)
  }
  ),
  datasets: [
    {
      label: '# of Votes',
      data: oneproduct?.map((item) => {
        return item.rating
      }
      ),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className='charts'>
      <Doughnut className='chart1' data={data} />
      <BarChart
  series={[
    { data: oneproduct2?.map((item) => {
      return item.rating
    }
    ) },
    { data: oneproduct3?.map((item) => {
      return item.rating
    }
    ) },
    { data: oneproduct4?.map((item) => {
      return item.rating
    }
    ) },
    { data: oneproduct5?.map((item) => {
      return item.rating
    }
    ) },
  ]}
  height={350}
  xAxis={[{ data: ['Type-1', 'Type-2', 'Type-3', 'Type-4'], scaleType: 'band' }]}
  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
/>
    </div>
  )
}

export default Chart
