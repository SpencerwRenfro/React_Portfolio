import React from 'react'
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Graph(props) {
  return (
    // <Bar data={props.barData}/>
    <>
    {console.log(props.barData + "this is from graph.js")}
    </>

  )
}

export default Graph