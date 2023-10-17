import React, {useEffect,useState} from 'react'
import styles from '../styles/Content.module.scss'
import filter from '../images/filter.svg'
import plus from '../images/plus.png'
import search from '../images/search.svg'
import down from '../images/down.png'
import axios from 'axios'
import Item from './Item'

export default function ClientsBar() {
    const [data, setData] = useState()

    function getData() {
        axios.get(`http://localhost:3000/data`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    }
  
    useEffect(()=>{
        getData()
    },[])

  return (
    <div className={styles.clientsBar}>
        <div className={styles.listHead}>
            <div className={styles.btnBox}>
                <button className={styles.filter}><img src={filter}/>Filters</button>
                <button className={styles.plus}><img src={plus}/>Add User</button>
            </div>
            <div className={styles.inputBox}>
                <img src={search} />
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className={styles.listCon}>
        <div className={styles.listTop}>
            <div className={styles.column27}>
                Learners
                <img src={down} />
            </div>
            <div className={styles.column15}>
            Language
                <img src={down} />
            </div>
            <div className={styles.column15}>
            Occupation
                <img src={down} />
            </div>
            <div className={styles.column15}>
            Objective
                <img src={down} />
            </div>
            <div className={styles.column27}>
            Subscription
                <img src={down} />
            </div>
        </div>
        <div className={styles.list}>
         {
            data && data.map((item)=>(
                <Item key={item.id} imgSrc={item.imgSrc} fullName={item.fullName} 
                flagSrc={item.flagSrc} email={item.email} language={item.language}
                occupation={item.occupation} objective={item.objective} 
                subscription={item.subscription}/> 
            ))
         }
        </div>
        </div>
    </div>
  )
}
