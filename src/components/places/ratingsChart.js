import React from 'react'
var ZingChart = require('zingchart-react').core;

var myConfig = {
  "type": "hbar",
  "plot": {
    "border-radius": "9px",
    "styles": ["#43A19E", "#7B43A1", "#F2317A", "#FF9824", "#58CF6C"],
    "valueBox": [{
      "text": "%v",
      "placement": "top"
    }]
  },
  "background-color": "#f2f2f2",
  "plotarea": {
    "margin": "dynamic dynamic dynamic dynamic"
  },
  "scale-x": {
    "labels": ["Poor", "Average", "Good", "Must Visit", "Insane"],
    "tick": {
      "visible": false
    },
    "guide": {
      "visible": false
    }
  },
  "scale-y": {
    "label": {
      "text": "Ratings"
    },
    "tick": {
      "visible": false
    },
    "guide": {
      "visible": false
    }
  },
  "series": [{
    "values": [35, 42, 67, 89, 25]
  }]
};
export default class RatingsGraph extends React.Component {
 render () {
         return (
          
          <ZingChart id="myChart" height="200" width="100%" data={myConfig} />
         
         )
      }
}