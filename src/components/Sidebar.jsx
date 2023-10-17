import React from 'react'
import styles from '../styles/Sidebar.module.scss'
import call from '../images/call.png'
import activity from '../images/activity.png'
import contacts from '../images/contacts.png'
import subscription from '../images/subscription.png'

export default function Sidebar() {

  return (
    <div className={styles.sidebar}>
        <div className={styles.head}>
            <h1>Admin</h1>
        </div>
        <div className={styles.list}>
            <div className={styles.selected}>
                <img src={call} />
                <p>Live Calls</p>
            </div>
            <div className={styles.item}>
                <img src={contacts} />
                <p>Tutor online</p>
            </div>
            <div className={styles.item}>
                <img src={activity} />
                <p>Active subscription</p>
            </div>
            <div className={styles.item}>
                <img src={activity} />
                <p>Earning/Spending</p>
            </div>
        </div>
    </div>
  )
}
