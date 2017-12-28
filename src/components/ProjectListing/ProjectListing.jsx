import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Palette from 'react-palette'
import React from 'react'
import styles from './ProjectListing.module.scss'

export default class ProjectListing extends React.PureComponent {
	getArticles() {
		return this.props.projectEdges.map(({ node }) => ({
			path: node.fields.slug,
			cover: node.frontmatter.cover.childImageSharp.sizes,
			title: node.frontmatter.title,
			imageURL: node.frontmatter.cover.childImageSharp.sizes.src,
		}))
	}
	render() {
		const articles = this.getArticles()
		return (
			<div className={styles.base}>
				{articles.map(project => (
					<div key={project.path} className={styles.wrapper}>
						<div className={styles.content}>
							<div className={styles.image}>
								<Img sizes={project.cover} />
							</div>
							<Link
								to={project.path}
								key={project.path}
								className={styles.link}
							>
								<Palette image={project.imageURL}>
									{palette => (
										<div
											className={styles.overlay}
											style={{ backgroundColor: palette.vibrant }}
										/>
									)}
								</Palette>
								<h2>
									{project.title}
								</h2>
							</Link>
						</div>
					</div>
				))}
			</div>
		)
	}
}
