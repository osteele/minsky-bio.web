import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Helmet from 'react-helmet'
import React from 'react'
import config from '../../config/SiteConfig'

export default class About extends React.Component {
	render() {
		return (
			<div className="container about-container">
				<Helmet title={`About | ${config.siteTitle}`} />
				<Header>About</Header>
				<Container text>
					<p>
						Essays by and about Marvin Minsky.
					</p>

					<h3>Credits</h3>
					<ul>
						<li>Text by Marvin Minsky, Margaret Minsky, and friends</li>
						<li>Built with <a href="https://yarnpkg.com/en/">Gatsby</a></li>
						<li>Theme adapted from <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-emma">gatsby-starter-portfolio-emma</a> by <a href="https://www.lekoarts.de">LekoArts</a>.</li>
					</ul>
				</Container>
				<Footer />
			</div>
		)
	}
}
