import '../utils/emma.scss'

import Helmet from 'react-helmet'
import Navigation from '../components/Navigation/Navigation'
import React from 'react'
import config from '../../config/SiteConfig'

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div className="layout">
				<Helmet>
					<title>{config.siteTitle}</title>
				</Helmet>
				<Navigation />
				{children()}
			</div>
		)
	}
}
