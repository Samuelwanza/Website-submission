// COMBINE THIS WITH COMMENT ITEM!
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../../store/user-context';
import classes from './CommentInfo.module.css';
import CommentOpts from './CommentOpts';
const CommentInfo = (props) => {

  // const [postsList, setPostsList] = useState([]);
  // useEffect(() => {
  //   const fetchcomments = async () => {
  //     const commentsFromServer = await axios.get("http://localhost:4000/comments")
  //     console.log("[DEBUG]: posts received from db:", commentsFromServer.data)
  //     setPostsList(commentsFromServer.data)
  //   }
  //   fetchcomments()
  // }, []) // this DB retreival should only execute the first time this App is loaded.


  return (
    <div className={classes.comment}>
        <h3 className={classes.username}>User</h3>
        <p>Choice not chance determines destiny /s</p>
        <CommentOpts/>
    </div>
  );
}

export default CommentInfo;
