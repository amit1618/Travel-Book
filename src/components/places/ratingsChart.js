import { BarChart,XAxis,YAxis,Bar,CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Sector, Cell  } from 'recharts';

import React from 'react'

const data = [
      {name: 'Must Visit', value: 45},
      {name: 'Awsome', value: 20},
      {name: 'Great Place', value: 27},
      {name: 'One time Visit', value: 5},
      {name: 'Poor', value: 1},
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}`}
    </text>
  );
};

export default class RatingsGraph extends React.Component {
  render () {
    return(
        <PieChart width={200} height={150} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={100} 
          cy={100} 
          startAngle={180}
          endAngle={0}
          labelLine={false}
          innerRadius={60}
          outerRadius={80} 
          fill="#8884d8"
          label={renderCustomizedLabel}
          paddingAngle={5}
          
          >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip/>
        </PieChart>
      )
  }
}