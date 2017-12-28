import ArticleListing from '../components/ArticleListing/ArticleListing'
import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import config from '../../config/SiteConfig'

export default class Index extends React.Component {
  render() {
    const articleEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="container index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
        <div>
          <ArticleListing articleEdges={articleEdges} />
        </div>
        <Footer />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          fileAbsolutePath
          frontmatter {
            title
            cover {
              childImageSharp {
                sizes(
                  maxWidth: 850
                  quality: 90
                  traceSVG: { color: "#f3f3f3" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
