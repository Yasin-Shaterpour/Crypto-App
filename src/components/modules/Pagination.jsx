import React, { useState } from 'react'
import styles from './Pagination.module.css'
function pagination({page , setPage}) {

    const previousHandler = () => {
if(page <= 1) return ; 
setPage(page => page -1)

    }

    const nextHandler = () => {
        if(page >= 10) return ; 
        setPage(page => page + 1)

    }

  return (
    <div className={styles.pagination}>
        <button className={page == 1 ? styles.disabled : null} onClick={previousHandler}>previous</button>
        <p className={page == 1 ? styles.selected : null} className={page == 1 ? styles.selected : null} >1</p>
        <p className={page == 2 ? styles.selected : null}>2</p>
        {page > 2 && page < 9 && (
            <React.Fragment>
                <span>...</span>
                <p className={styles.selected}>{page}</p>
            </React.Fragment>
        )}
        <span>...</span>
        <p className={page == 9 ? styles.selected
             : null}>9</p>
        <p className={page == 10 ? styles.selected
             : null}>10</p>
        <button  className={page == 10 ? styles.disabled : null} onClick={nextHandler}>next</button>
    </div>
  )
}

export default pagination



// <div 
// class="absolute inset-0 z-0 opacity-[0.05]"
//  style=""></div>