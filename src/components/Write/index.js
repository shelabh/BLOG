import React, { useState } from 'react';


import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase } from '@material-ui/core';
import { AddCircle as Add} from '@material-ui/icons';
import { createPost } from '../../service/api';

import Header from '../Header'



const useStyles = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
        
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textArea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));


const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'shelabh',
    categories: 'All',
    createdDate: new Date()
}


const CreatePost = () => {

    const classes = useStyles();
   
    

    const [post, setPost] = useState(initialValues);

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})

    }

    const savePost = async () => {
        await createPost(post);
       
    }



    return (
    <Box>
        <Header />
        
       
            <Box className={classes.container} >
               
                <img src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="post" className={classes.image} />

                <FormControl className={classes.title}>
                    <label htmlFor="fileInput">
                        <Add className={classes.addIcon} fontSize="large" color="action" />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}  
                    />
                    <InputBase  
                        onChange={(e) => handleChange(e)} 
                        name='title'
                        placeholder="Title" 
                        className={classes.textField} 
                    />
                    <Button  onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
                </FormControl>
                <TextareaAutosize
                    rowsMin={5}
                    placeholder="Tell your story..."
                    name='description'
                    className={classes.textArea}
                    onChange={(e) => handleChange(e)}
                />
            </Box>
            </Box>

    )
}

export default CreatePost;