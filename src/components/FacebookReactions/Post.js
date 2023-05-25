import Header from './Header';
import Reactions from './Reactions';
import '../../CSS/CSS/post.css';



export default function Post(props) {
    return(
        <div className="faceboook-post bg-base-300">
            <Header/>
            <div className="post bg-base-300"></div>
            <Reactions onAddComment={props.addCommentHandler}/>
        </div>
    );
}

