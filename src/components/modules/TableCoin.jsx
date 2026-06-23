import React from 'react'
import {Triangle} from 'react-loader-spinner'
import TableRow from './TableRow'
import styles from './TableCoin.module.css'
function TableCoin({coins , isloding , setChart}) {

  return (
    <div className={styles.container}>
      {isloding ? <Triangle color="#0f61d5" /> : 
        <table className={styles.table}>
        <thead><tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24H</th>
            <th>Total Volume</th>
            <th></th>
            </tr></thead>
        <tbody>
            {coins.map((coin) => (
                
              <TableRow coin={coin} key={coin.id} setChart={setChart}/>
            ))}
        </tbody>
    </table>
    }
    </div>
  )
}

export default TableCoin 

