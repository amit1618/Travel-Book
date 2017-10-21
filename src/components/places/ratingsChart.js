import { BarChart,XAxis,YAxis,Bar,CartesianGrid, Tooltip, Legend } from 'recharts';
import React from 'react'

const data = [
      {name: 'Must Visit', reviews: 45},
      {name: 'Awsome', reviews: 20},
      {name: 'Great Place', reviews: 27},
      {name: 'One time Visit', reviews: 5},
      {name: 'Poor', reviews: 1},
];

export default class RatingsGraph extends React.Component {
  render () {
    return(
        <BarChart width={300} height={200} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Bar dataKey="reviews" fill="#8884d8" />
      </BarChart>
      )
  }
}