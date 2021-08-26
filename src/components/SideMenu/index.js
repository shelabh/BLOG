import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '100%',
    maxWidth: 200,
    backgroundColor: '#FAD0C4',
    marginRight: 10,
    marginTop: 5,
    postion: 'static'

  },
  nested: {

    paddingLeft: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
	
  },
  text: {

	  marginLeft:10

  },
  sub: {

	  marginRight: 25
    
  },
  write: {
		color: 'inherit',
		textDecoration: 'none'
	},
  com: {

	  marginLeft: 10

  }

}));



export default function NestedList() {


  const classes = useStyles();
  const [close, setClose] = React.useState(false);
  const handleClick = () => {
    setClose(!close);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  return (

      <Box boxShadow={3} className={classes.root}>
        <List component="nav" aria-labelledby="nested-list-subheader" >
          <ListItem button 
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="Profile" className={classes.text} />
          </ListItem>
          <Divider variant="middle" />
         
            <ListItem button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} >
                <Link to={`/write`} style={{ textDecoration: 'none' }} className={classes.write}>
                  <Typography  className={classes.text}>
                      Write
                  </Typography>
                </Link>
            </ListItem>
         
          <Divider variant="middle" />
          <ListItem button onClick={handleClick}
          
          >
            <ListItemText primary="Stories" className={classes.text} />
              {close ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={close} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} 
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="Drafts" className={classes.sub}/>
              </ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Published" />
              </ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
              >
                <ListItemText primary="Saved" className={classes.sub} />
              </ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
              >
                <ListItemText primary="Complaints"  className={classes.com}/>
              </ListItem>
            </List>
            </Collapse>
            <Divider variant="middle" />
            <ListItem button
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemText primary="Complaint" className={classes.text} />
            </ListItem>
            <Divider variant="middle" />
            <ListItem button 
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemText primary="Settings" className={classes.text} />
            </ListItem>
      </List>
    </Box>
    
  );
}