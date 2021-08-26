import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    
    flexDirection: 'column',
    
    marginLeft: 10,
    marginTop: 5,
   
  },
  text: {
    color: '#878787'

  },
  
  media: {
    height: 140,
  },
});

const Post = ({ post }) => {
  const classes = useStyles();
  const url = post.picture || '/static/images/cards/contemplative-reptile.jpg'
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {post.description}
          </Typography> 
          <Typography className={classes.text}>
            {post.categories}
          </Typography> 
        
        </CardContent>
        
      </CardActionArea>
      <CardActions >
        <Button size="small" color="primary">
          Share
        </Button>
        <Typography style={{marginLeft: 'auto'}} className={classes.text}>
            By: {post.username}
          </Typography> 
        
      
      </CardActions>
    </Card>
  );
}


export default Post;