import React from 'react'
import styles from '../styles/Content.module.scss'

export default function Overview() {
  return (
          <div className={styles.overview}>
            <div className={styles.item}>
                <h1>750K</h1>
                <p>Sale</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.item}>
                <h1>7,500</h1>
                <p>Cancels</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.item}>
                <h1>7,500</h1>
                <p>Total Earned</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.item}>
                <h1>7,500</h1>
                <p>Distributions</p>
            </div>
        </div>
  )
}
