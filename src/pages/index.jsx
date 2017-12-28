import ArticleListing from '../components/ArticleListing/ArticleListing'
import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import config from '../../config/SiteConfig'

export default class Index extends React.Component {
  render() {
    const projectEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="container index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
        <div>
          <ArticleListing projectEdges={projectEdges} />
        </div>
        <Footer />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
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
