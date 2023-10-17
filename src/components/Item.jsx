import React from "react";
import styles from '../styles/Content.module.scss'
import del from '../images/del.png'
import edit from '../images/edit.png'

export default function Item({imgSrc,fullName,flagSrc,email,language, occupation,objective,subscription}) {
  return (
    <div className={styles.listItem}>
      <div className={styles.column27}>
        <img src={imgSrc} className={styles.profil} />
        <div className={styles.txt}>
          <div className={styles.nameImg}>
            <h4>{fullName}</h4>
            <img src={flagSrc} />
          </div>
          <p>{email}</p>
        </div>
      </div>
      <div className={styles.column15}>{language}</div>
      <div className={styles.column15}>{occupation}</div>
      <div className={styles.column15}>{objective}</div>
      <div className={styles.column15}>{subscription}</div>
      <div className={styles.iconBox}>
        <img src={del} />
        <img src={edit} />
      </div>
    </div>
  );
}
