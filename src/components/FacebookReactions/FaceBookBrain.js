import React, { useState } from 'react';
// import '../../App.css';
import Post from './Post';
import Header from './Header';
import Reactions from './Reactions';



function FaceBookBrain() {

  const [comments, setComments] = useState([
  {text: '',
    id: ''
  }
  ]);

  const addCommentHandler = enteredText => {
    setComments(prevComment => {
      const updatedComment = [...prevComment];
      updatedComment.unshift({text: enteredText, id: Math.random().toString() })
      return updatedComment;
    });
};




  return (
    // <div className="layout ">
    //  <div className="facebook-card bg-base-300">
    //   <Post onAddComment={addCommentHandler}/>
    //  </div>
    //  <div className=" pt-10"></div>

 
    // </div>
    <div className='layout'>
    <div className='facebook-card  bg-base-300'>
    <Post />
    </div>
    </div>
  );
}

export default FaceBookBrain;
