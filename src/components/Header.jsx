import React from 'react'
import styles from '../styles/Header.module.scss'
import hi from '../images/hi.png'
import profil from '../images/profil.png'
import search from '../images/search.svg'

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
        <div className={styles.name}>
            <h1>Hello, John</h1>
            <img src={hi} />
        </div>
        <div className={styles.inputBox}>
            <div className={styles.input}>
              <input type="text" />
              <img src={search} />
            </div>
            <img src={profil}  className={styles.profil}/>
        </div>
        </div>
    </div>
  )
}
