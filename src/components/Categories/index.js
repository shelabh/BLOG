import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
import { categories } from '../../constants/data'

import { Link } from 'react-router-dom'


const useStyles = makeStyles({
	add: {
		margin:20,
		background: '#53C351',
		color: '#fff',
		width: '60%'
	},
	write: {
		margin: 20,
		width: '85%',
		background: '#6495ED',
		color: '#fff',
		textDecoration: 'none'
	},
	table: {
		border: '1px solid rgba(224,224,224,1)',
		background: '#77D9EB',
		margin: '5px 0 0 0'
	}
})





const Categories = () => {
	const classes = useStyles();
	return (
		<>
		<Link to={`/write`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" className={classes.write}>Create Blog</Button>
            	</Link>
		
			<Table className={classes.table} boxShadow={3}>
				<TableHead>
					<TableCell>All Categories</TableCell>
				</TableHead>
			
				<TableBody>
					{
						categories.map(category => (
							<TableRow>
								<TableCell>{category}</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</>
	)
}


export default Categories;