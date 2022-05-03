// Using Express router.
const express = require('express');
const router = express.Router();
// Load controller.
const comments = require('../controllers/comments');
const Comment = require('../models/comment');

// // @route [GET]: get specific post's comments
// router.get('/', comments.getComments);

// @route [POST]: insert a comment into a post
router.post('/new', comments.insertComment);

router.get("/get",auth,async(req,res)=> {
    try{
        const comments= await comment.find()
        res.send(comments)
        
    }catch(err){
        res.status(500).json({message:err.message})
        
    }

 
})


module.exports = router;