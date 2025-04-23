import React from 'react'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
       <div className="area">
       <h1 className={styles.h1}>Present your business in a whole new way</h1>
        <p className={styles.p}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div className={styles.btn}>
            <button className={styles.button1}>Get Started</button>
            <button className={styles.button2}>Learn more</button>
        </div>
       </div>
    </div>
    </section>
    
  )
}

export default Home