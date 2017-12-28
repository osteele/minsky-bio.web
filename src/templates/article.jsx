import Container from '../components/Container/Container'
import { Fade } from 'react-reveal'
import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'
import Palette from 'react-palette'
import React from 'react'
import config from '../../config/SiteConfig'
import format from 'date-fns/format'
import styles from './article.module.scss'

export default class Article extends React.Component {
	render() {
		const { slug } = this.props.pathContext
		const postNode = this.props.data.markdownRemark
		const article = postNode.frontmatter
		const date = format(article.date, config.dateFormat)
		const imageURL = article.cover.childImageSharp.resize.src
		if (!article.id) {
			article.id = slug
		}
		return (
			<div className="container article-container">
				<Helmet title={`${article.title} | ${config.siteTitle}`} />
				<div className={styles.headerWrapper}>
					<Palette image={imageURL}>
						{palette => (
							<section
								className={styles.header}
								style={{ backgroundColor: palette.vibrant }}
							>
								<div className={styles.title}>
									<Fade down duration={1250} tag="h1">
										{article.title}
									</Fade>
								</div>
								<div className={styles.information}>
									<div className={styles.infoBlock}>
										<Fade up duration={1250} className={styles.top}>
											{config.title}
										</Fade>
										<Fade
											up
											duration={1250}
											delay={500}
											className={styles.bottom}
										>
											{article.title}
										</Fade>
									</div>
									<div className={styles.infoBlock}>
										<Fade up duration={1250} className={styles.top}>
											{config.date}
										</Fade>
										<Fade
											up
											duration={1250}
											delay={500}
											className={styles.bottom}
										>
											{date}
										</Fade>
									</div>
									<div className={styles.infoBlock}>
										<Fade up duration={1250} className={styles.top}>
											{config.subtitle}
										</Fade>
										<Fade
											up
											duration={1250}
											delay={500}
											className={styles.bottom}
										>
											{article.subtitle}
										</Fade>
									</div>
								</div>
							</section>
						)}
					</Palette>
				</div>
				<Container>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: postNode.html }}
					/>
				</Container>
				<Footer />
			</div>
		)
	}
}

export const pageQuery = graphql`
  query ArticlePostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        title
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`
