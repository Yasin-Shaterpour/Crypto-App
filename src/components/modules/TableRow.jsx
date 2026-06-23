import React from 'react'
import { marketChart } from '../services/CryptoApi';
import chartUp from '../../assets/chart-up.svg'
import chartdown from '../../assets/chart-down.svg'
import styles from './TableCoin.module.css'

function TableRow({coin , setChart}) {
    const {id
        , image 
        , symbol 
        , name
        , current_price
        ,price_change_percentage_24h : price_change
      }
        
        = coin;
 
        const ShowHandler = async () => {
          try {
         const res = await fetch(marketChart(id));
         const data = await res.json() ;
         console.log(data);  
         setChart({...data , coin})
          } catch (error) {
            setChart(null)
          }
        }
        return (
      <tr key={id} className={styles.active}>
                          <td>
                            <div className={styles.symbol} onClick={ShowHandler}>
                                <img src={image} alt="coin" />
                                <span>{symbol.toUpperCase()}</span>
                            </div>
                          </td>
                          <td className={styles.name}>{name}</td>
                          <td>$ {current_price.toLocaleString()}</td>
                          <td className={price_change > 0 ? styles.success :styles.error }>{price_change !== null? price_change.toFixed(2): "0"}%</td>
                          <td><img src={price_change > 0 ? chartUp : chartdown} alt="" /></td>
                        </tr>
  )
}

export default TableRow