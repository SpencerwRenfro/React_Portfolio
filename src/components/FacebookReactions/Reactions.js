import React, { useState } from 'react';
import '../../CSS/CSS/reactions.css';


// pngs
import Like from './images/Reactions/like.png';
import Heart from './images/Reactions/heart.png';
import Wow from './images/Reactions/wow.png';
import Laugh from './images/Reactions/laugh.png';
import Sad from './images/Reactions/sad.png';
import Angry from './images/Reactions/angry.png';

// gifs
// import LikeGif from './images/Reactions/like.gif'
// import WowGif from './images/Reactions/WowGif.gif';
// import SadGif from './images/Reactions/SadGif.gif';
// import AngryGif from './images/Reactions/angry.gif';
// import SadGif from './images/Reactions/Sad.gif'
// import Angry2 from './images/Reactions/Angry2.gif';
// import HaHaGif from './images/Reactions/haha.gif';
// import HeartGif from './images/Reactions/LoveGif.gif';
// import EmojiAngry from './images/Reactions/Emoji_Angry.gif';



// New small file gifs
import EmojiAngry from './images/Reactions/Emoji_Angry.gif';
import EmojiCare from './images/Reactions/Emoji_Loved.gif';
import EmojiWow from './images/Reactions/Emoji_Wow.gif';
import EmojiHaHa from './images/Reactions/Emoji_haha.gif';
import EmojiLike from './images/Reactions/Emoji_Like.gif';
import EmojiSad from './images/Reactions/Emoji_Sad.gif';




export default function Reactions() {


    let like = Like;
    let heart = Heart;
    let wow = Wow;
    let laugh = Laugh;
    let sad = Sad;
    let angry = Angry;

    const [likeReaction, setLikeReaction] = useState(false);
    const [reactionClass, setReactionClass] = useState('');
    const [commentClicked, setCommentClicked] = useState(false);


    const reactionHandler = (event) => {
        console.log(event.target.id + " clicked");
        if (event.target.id === "like") {
            setReactionClass(like)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "heart") {
            setReactionClass(heart)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "wow") {
            setReactionClass(wow)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "laugh") {
            setReactionClass(laugh)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "sad") {
            setReactionClass(sad)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "angry") {
            setReactionClass(angry)
            console.log('this is the reaction class name: ' + reactionClass)
        }
    }


    return (
        <div>
            <div className="post-interactions ">

                {/* <button className={`reaction-button {reactionClass.length > 1 ? `${reactionClass}` : '' }}}> */}
                <button className={`reaction-button ${reactionClass.trim().length > 1 ? `${reactionClass}` : ''}`}>
                    {/* <img src={`${reactionClass}`} alt='' />
                <img src={`${sad}`} alt='' /> */}
                    like
                    <span className="facebook-span ">
                        <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiLike} alt="" id="like" /></button>
                        <button onClick={reactionHandler}>  <img className="img-transform facebook-img" src={EmojiCare} alt="" id="heart" /></button>
                        <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiWow} alt="" id="wow" /></button>
                        <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiHaHa} alt="" id="laugh" /></button>
                        <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiSad} alt="" id="sad" /></button>
                        <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiAngry} alt="" id="angry" /></button>
                        {/* removed className transparent from all buttons */}
                    </span>
                </button>
                <button className='reaction-button'>comment</button>
                <button className='reaction-button'>share</button>
            </div>
            <img src={reactionClass} className="facebook-img" alt="" />
            <img src={''} className="facebook-img" alt="" />
            <div >
            </div>

        </div>
    );
}