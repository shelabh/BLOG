import {Grid} from '@material-ui/core'

import { useState, useEffect } from 'react'
import { getAllPosts } from '../../service/api'
import { Link } from 'react-router-dom'

import Dcard from '../Dcard'



const Posts = () => {
	const[posts, setPosts] = useState([]);
	
	
	//let posts = [1,2,3,4,5,6,7,8,9];
	useEffect(() => {
		const fetchData = async () => {
			let data = await getAllPosts();
			setPosts(data);
		}
		fetchData();
	}, []);


	return (
		<>
			{posts.map(post => (
				<Grid item lg={3} sm={4} xs={12}>
					<Link to={`/details/${post._id}`} style= {{ textDecoration: 'none', color: 'inherit' }}>
						<Dcard post={post} />
					</Link>
				</Grid>
			
			))
			}
	</>
	)
}

export default Posts;