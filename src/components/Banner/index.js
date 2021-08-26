import { makeStyles, Box} from '@material-ui/core';


import Typewriter from 'typewriter-effect';


const useStyles = makeStyles({
	image: {
		background: `url(${'https://images.unsplash.com/photo-1595418571644-5f07ebeaceb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBvbGx1dGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}) center/100% repeat-x #000`,
		width: '100%',
		height: '40vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& :first-child' : {
			fontSize: 65,
			color: '#FFFFFF'
		},
	}
});


const Banner = () => { 
	const classes = useStyles();
	
	
	return (
		<Box className={classes.image}>
			
		
			
			<Typewriter
				options={{
				strings: ['GlobalEarthCitizen'],
				autoStart: true,
				loop: true,
				}}
			/>
			
		</Box>
	)
}

export default Banner;