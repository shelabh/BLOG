import express, { Router } from 'express';
import { createPost, getAllPosts, getPost } from '../controller/write-controller.js';

const router = express.Router();



router.post('/write', createPost);

router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);



export default router;