import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Palette from 'react-palette'
import React from 'react'
import styles from './ArticleListing.module.scss'

export default class ArticleListing extends React.PureComponent {
	getArticles() {
		return this.props.articleEdges.map(({ node }) => ({
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
								<h2>
									{article.title}
								</h2>
							</Link>
						</div>
					</div>
				))}
			</div>
		)
	}
}
