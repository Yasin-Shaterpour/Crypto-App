import React, { useState } from 'react'
import styles from './Chart.module.css'
import { ConverData } from '../../Helpers/ConvertData';
import { use } from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
function Chart({chart , setChart}) {
  const [type , setType] = useState("prices")
  const TypeHandler = (e) => {
 if(e.target.tagName == 'BUTTON'){
   const type = e.target.innerText.toLowerCase().replace(' ' , '_')
   setType(type)
 }

  }

  console.log(ConverData(chart , type));
  return (
    <div className={styles.container}>
        <div className={styles.chart}>
        <span className={styles.cross} onClick={() => {setChart(null)}}> X </span>
          <div className={styles.name}>
            <img src={chart.coin.image} alt="" />
            <p> {chart.coin.name}</p>
          </div>
          <div className={styles.graph}>
        <ChartComponent data={ConverData(chart , type)} type={type}/>
          </div>
          <div className={styles.types} onClick={TypeHandler} >
            <button className={styles.button}>Prices</button>
            <button className={styles.button}>Market Caps</button>
            <button className={styles.button}>Total Volumes</button>
          </div>
          <div className={styles.details}>
            <div>
              <p>Prices :</p>
              <span>{chart.coin.current_price}%</span>
              </div>
            <div>
              <p>ATH :</p>
              <span>{chart.coin.ath}$</span>
              </div>
            <div>
              <p>Market Cap :</p>
              <span>{chart.coin.market_cap}%</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Chart

const ChartComponent = ({data , type}) => {
 return      <ResponsiveContainer width="100%" height='100%'>

 <LineChart width='400px' height='400px' data={data}>
  
 <Line type='monotoneY' dataKey={type} stroke='#3874ff' strokeWidth='2px' className={styles.line}/>
 <CartesianGrid stroke='#404042'/>
 <YAxis dataKey={type} domain={["auto" , "auto"]}/>
 <XAxis dataKey='date' hide/>
 <Legend/>
 <Tooltip />
 </LineChart>

</ResponsiveContainer>

}