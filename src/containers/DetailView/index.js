import { Box , makeStyles, Typography } from '@material-ui/core';
import { Share, BookmarkBorder } from '@material-ui/icons';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { getPost } from '../../service/api';
import Header from '../../components/Header';



const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: 10,
		padding: '0 100px',
		[theme.breakpoints.down('md')]: {
			padding: 0
		}
	},
	image: {
		width: '100%',
		height: '50vh',
		objectFit: 'cover'
	},
	icons: {
		float: 'right'
	},
	icon: {
		margin: 5,
		border: '1px solid #878787',
		padding: 5,
		borderRadius: 10
	},
	heading:{
		fontSize: 38,
		fontWeight: 600,
		textAlign: 'center',
		margin: '50px 0 10px 0'
	},
	subheading: {
		color:'#878787',
		display:'flex',
		margin: '20px 0',
		[theme.breakpoints.down('sm')]: {
			display: 'block'
		}
	},
	link: {
		textDecoration: 'none',
		color: 'inherit'
	}
}))




const DetailView = ({ match }) => {
	const classes = useStyles();
	const url = "https://placehold.it/";

	const [post, setPost] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			let data = await getPost('match.params.id');
			
			setPost(data);
		}
		fetchData();
	}, []);


	return (
		<>
		<Header />
		<Box className={classes.container}>
			<img className={classes.image} alt='pic' src={post.picture || url} />
			<Box className={classes.icons}>
				<Share className={classes.icon} />
				<BookmarkBorder className={classes.icon}/>
			</Box>
			<Typography className={classes.heading}>
				{post.title}
			</Typography>
			<Box className={classes.subheading}>
				<Link to={`/?username=${post.username}`} className={classes.link}>
					<Typography >
						Author: <span style={{fontWeight: 600}} >{post.username}</span>
					</Typography>
				</Link>
				<Typography style={{marginLeft: 'auto'}}>
					{new Date(post.createdDate).toDateString()}
				</Typography>
			</Box>
			<Typography>
				{post.description}
			</Typography>
		</Box>
		</>
	)
}

export default DetailView;