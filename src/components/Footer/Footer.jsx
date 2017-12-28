import Link from 'gatsby-link'
import React from 'react'
import config from '../../../config/SiteConfig'
import styles from './Footer.module.scss'

export default class Footer extends React.Component {
  render() {
    return <footer className={styles.footer}>{config.copyright}</footer>
  }
}
