import React from 'react'
import styles from '../styles/Content.module.scss'
import Overview from './Overview'
import ClientsBar from './ClientsBar'

export default function Content({setShowModal}) {
    
  return (
    <div className={styles.content}>
       <div className={styles.container}>
        <Overview />
        <ClientsBar setShowModal={setShowModal}/>
       </div>
    </div>
  )
}
