import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import { use } from 'react'
import { searchCoin } from '../services/CryptoApi'
import { Triangle } from 'react-loader-spinner'

function Search({currency , setCurrency}) {
   const [text , setText] = useState('')
   const [coins , setCoins] = useState([])
   const [isLoding , setIsloding] = useState(false)
   const controller = new AbortController()
   
   
   
   useEffect(() => {
     setCoins([])
     if(!text) return ;
      
     const search = async () => {
      
try {

  if(!text) {
    setIsloding(false)
    return
  }
  const res = await fetch(searchCoin(text) , {signal : controller.signal} )
  const data = await res.json();
  console.log(data);
  if(data.coins){ 
    setCoins(data.coins)
setIsloding(false)
  
  }
   else{
    alert(data.status.error_message)
  }
  
} catch (error) {
  
if(error !== "AbortError") {
  alert(error.message)
}

}


    }
setIsloding(true)
    search()
    return () => controller.abort()
   } , [text])

  return (
    <div className={styles.container}>
        <input  className={styles.searchInput} 
        type="text" 
        value= {text}
        onChange={e => {setText(e.target.value)}}
        placeholder='Search'/>
        <select className={styles.selectInput} value={currency} onChange={(e) => setCurrency(e.target.value) } name="" id="">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
       {(!!coins.length || isLoding ) && <div className={styles.searchResult}>
          {isLoding && <Triangle color='#214ecf' height="180" width="180"/> }
          <ul>
            {coins.map((coin) => <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
            </li>)}
          </ul>
        </div>}
    </div>
  )
}

export default Search