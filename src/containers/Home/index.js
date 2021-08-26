import React from 'react';
import Header from '../../components/Header'

import { Grid } from '@material-ui/core'
import Banner from '/Users/shelabhtyagi/my-blog/src/components/Banner'

import Categories from '../../components/Categories'
import Posts from '../../components/Posts'

export default function Index() {
	return (
		<div>
			<Header />
			<Banner />
			<Grid container >
				<Grid item lg={2} xs={12} sm={2}>
					<Categories/>
				</Grid>
				<Grid container item lg={10} xs={12} sm={10}>
					<Posts/>
				</Grid>
			</Grid>
		</div>
	)
}
