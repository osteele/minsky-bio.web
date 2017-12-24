import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Palette from 'react-palette'
import React from 'react'
import styles from './ProjectListing.module.scss'

export default class ProjectListing extends React.PureComponent {
	getList() {
		const List = []
		this.props.projectEdges.forEach(projectEdge => {
			List.push({
				path: projectEdge.node.fields.slug,
				cover: projectEdge.node.frontmatter.cover.childImageSharp.sizes,
				title: projectEdge.node.frontmatter.title,
				imageURL: projectEdge.node.frontmatter.cover.childImageSharp.sizes.src,
			})
		})
		return List
	}
	render() {
		const List = this.getList()
		return (
			<div className={styles.base}>
				{List.map(project => (
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
