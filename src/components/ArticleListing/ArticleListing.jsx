import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Palette from 'react-palette'
import React from 'react'
import styles from './ArticleListing.module.scss'

export default class ArticleListing extends React.PureComponent {
  getArticles() {
    return this.props.articleEdges.map(({ node: { fields, frontmatter } }) => ({
      path: fields.slug,
      chapterNumber: fields.chapterNumber,
      cover: frontmatter.cover.childImageSharp.sizes,
      title: frontmatter.title,
      imageURL: frontmatter.cover.childImageSharp.sizes.src,
    }))
  }
  render() {
    const articles = this.getArticles()
    return (
      <div className={styles.base}>
        {articles.map(article => (
          <div key={article.path} className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Img sizes={article.cover} />
              </div>
              <Link
                to={article.path}
                key={article.path}
                className={styles.link}
              >
                <Palette image={article.imageURL}>
                  {palette => (
                    <div
                      className={styles.overlay}
                      style={{ backgroundColor: palette.vibrant }}
                    />
                  )}
                </Palette>
                <h2>{article.chapterNumber}. {article.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
