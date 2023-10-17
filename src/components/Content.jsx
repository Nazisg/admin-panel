import React from 'react'
import styles from '../styles/Content.module.scss'
import Overview from './Overview'
import ClientsBar from './ClientsBar'

export default function Content() {
    
  return (
    <div className={styles.content}>
       <div className={styles.container}>
        <Overview />
        <ClientsBar />
       </div>
    </div>
  )
}
