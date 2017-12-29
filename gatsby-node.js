const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators
	if (
		node.internal.type === 'MarkdownRemark' &&
		Object.prototype.hasOwnProperty.call(node, 'frontmatter')
	) {
		const dirname = path.basename(path.dirname(node.fileAbsolutePath))
		const m = dirname.match(/^(\d+(\.\d+)*)\.\+*(.+)/)
		if (m) {
			createNodeField({ node, name: 'chapterNumber', value: Number(m[1]) })
			createNodeField({ node, name: 'chapterTitle', value: m[2] })
		}
		let slug
		if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')) {
			slug = `/${_.kebabCase(node.frontmatter.title)}`
		}
		else if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
			slug = `/${_.kebabCase(node.frontmatter.slug)}`
		}
		createNodeField({ node, name: 'slug', value: slug })
	}
}

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators

	return new Promise((resolve, reject) => {
		const articlePage = path.resolve('src/templates/article.jsx')
		resolve(
			graphql(
				`
        {
          articles: allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
								fileAbsolutePath
              }
            }
          }
        }
      `
			).then(result => {
				if (result.errors) {
					/* eslint no-console: "off" */
					console.log(result.errors)
					reject(result.errors)
				}

				result.data.articles.edges.forEach(edge => {
					createPage({
						path: edge.node.fields.slug,
						component: articlePage,
						context: {
							slug: edge.node.fields.slug,
						}
					})
				})
			})
		)
	})
}
