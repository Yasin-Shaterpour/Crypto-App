// Importing Files to This Project

import React , { useEffect, useState } from 'react'
import TableCoin from '../modules/TableCoin'
import Pagination from '../modules/Pagination';
import { getCoinList } from '../services/CryptoApi'
import Search from '../modules/Search';
import Header from '../modules/Header';
import Chart from '../modules/Chart';

function HomePage() {
    const [coins , setCoins] = useState([]);
    const [isloding , setIsLoding] = useState(true);
    const [page , setPage] = useState(1);
    const [currency , SetCurrency] = useState('usd');
    const [chart , setChart] = useState(null)
    // Use effect for fetching The Data From coinkegckpo.com(free Crypto API)

    
    useEffect(() => {
        setIsLoding(true) 
     const getData = async () => {
    try {

        const res = await fetch(getCoinList(page , currency ))
        const Data = await res.json();
        setCoins(Data);
        setIsLoding(false)
    } catch (error) {
        console.log(error);
    }
}
getData()
    } , [page , currency])

  return ( 

      <div>
      <div className='Line-background '></div>
      <Header/>
      <Search currency={currency} setCurrency={SetCurrency}/>
      <TableCoin coins={coins} isloding={isloding} setChart={setChart}/> 
      <Pagination page={page} setPage={setPage}/>
      {!!chart && <Chart chart={chart} setChart={setChart} />}
  </div>
  )
}

export default HomePage