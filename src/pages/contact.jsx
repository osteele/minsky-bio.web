import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Helmet from 'react-helmet'
import React from 'react'
import config from '../../config/SiteConfig'

export default class Contact extends React.Component {
	render() {
		return (
			<div className="container contact-container">
				<Helmet title={`Contact | ${config.siteTitle}`} />
				<Header>Contact</Header>
				<Container text>
					<p>
						Contact information will go here.
					</p>
				</Container>
				<Footer />
			</div>
		)
	}
}
