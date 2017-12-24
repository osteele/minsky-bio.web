import Container from '../components/Container/Container'
import { Fade } from 'react-reveal'
import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'
import Palette from 'react-palette'
import React from 'react'
import config from '../../config/SiteConfig'
import format from 'date-fns/format'
import styles from './project.module.scss'

export default class Project extends React.Component {
	render() {
		const { slug } = this.props.pathContext
		const postNode = this.props.data.markdownRemark
		const project = postNode.frontmatter
		const date = format(project.date, config.dateFormat)
		const imageURL = project.cover.childImageSharp.resize.src
		if (!project.id) {
			project.id = slug
		}
		return (
			<div className="container project-container">
				<Helmet title={`${project.title} | ${config.siteTitle}`} />
				<div className={styles.headerWrapper}>
					<Palette image={imageURL}>
						{palette => (
							<section
								className={styles.header}
								style={{ backgroundColor: palette.vibrant }}
							>
								<div className={styles.title}>
									<Fade down duration={1250} tag="h1">
										{project.title}
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
											{project.title}
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
											{project.subtitle}
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
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        title
        subtitle
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
