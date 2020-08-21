import React from 'react'
import classnames from 'classnames'
import styles from './Header.module.css'
import Animation from '../../../redux/features/animation/models/Animation'

interface Props {
  animation: Animation
  handleReset: () => {}
}

const Header: React.FunctionComponent<Props> = ({ animation, handleReset }) => (
  <header className={styles.main}>
    <nav className={styles.nav}>
      <h1 className={styles.brand} title="Tout effacer">
        <a className={styles.brandLink} onClick={handleReset}>
          <span className={classnames({ [styles.drop]: animation.plouf1 })}>Plouf, </span>
          <span className={classnames({ [styles.drop]: animation.plouf2 })}>Plouf !</span>
        </a>
      </h1>
    </nav>
  </header>
)

export default Header