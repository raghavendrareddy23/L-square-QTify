import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

const Card = ({Card_Image, Title, Description}) => {
  return (
    <div className={styles.card}>
        <img className={styles.cardImg} src={Card_Image} alt="Card" />
        <div className={styles.title}>
            <h3>{Title}</h3>
        </div>
        <div className={styles.description}>
        <p>{Description}</p>
        </div>
    </div>
  )
}
Card.propTypes = {
    Card_Image: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
}

export default Card