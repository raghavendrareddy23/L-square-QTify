import React from 'react'
import headphones from '../../Assets/vibrating-headphone 1.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.hero_text}>
            <div id={styles.text1}>
                100 Thousand Songs, ad-free.
            </div>
            <div id={styles.text2}>
                Over thousands podcast episodes.
            </div>
        </div>
        <div className={styles.hero_img}>
            <img src={headphones} alt="hero_image" />
        </div>
    </div>
  )
}

export default Hero