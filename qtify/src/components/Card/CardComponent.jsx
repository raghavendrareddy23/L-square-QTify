import React from 'react'
import Text from '../Cards/Text'
import Button from '../Button/Button'
import styles from './CardComponent.module.css'
const CardComponent = () => {
  return (
    <nav className={styles.navbar}>
        <Text title="Top Albums"/>
        <Button children="Show all" />
    </nav>
  )
}

export default CardComponent