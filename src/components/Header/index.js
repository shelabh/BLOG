import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: 'white',
		'& > *': {
			padding: theme.spacing(1),
		},
	},
	title: {
		flexGrow: 1,
		padding: 20,
		color: 'black'
	},
	
}));



export default function Header() {
	const classes =useStyles();
	return (
		<div>
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					
						<Typography variant="h6" className={classes.title}>
							GlobalEarthCitizen
						</Typography>
					
					
						<Button >About</Button>
						<Button>Complaint</Button>
						<Button>Login</Button>
						<Button variant="outlined"  size="small" color="primary" className={classes.button}>Sign Up</Button>
					
				</Toolbar>
			</AppBar>
		</div>
	)
}



