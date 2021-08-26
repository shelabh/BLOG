import { Box, makeStyles, Typography } from '@material-ui/core';

import Header from '../../components/Header'

const useStyles = makeStyles({
    banner: {

        backgroundImage: `url(${'https://placehold.it/'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'

    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
});



const About = () => {
    const classes = useStyles();
    return (
        <Box>
		<Header />
	
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Name</Typography>
                <Typography variant="h5" className={classes.text}>I'm a Environmentalist based in India. 
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Helping The World Out
                </Typography>
            </Box>
        </Box>
    )
}

export default About;