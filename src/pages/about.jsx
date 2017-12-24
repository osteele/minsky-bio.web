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
						You have found my site-in-waiting. This site will host essays.
					</p>
				</Container>
				<Footer />
			</div>
		)
	}
}
