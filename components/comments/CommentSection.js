import Comment from "./Comment";
import NewComment from "./NewComment";
import classes from "./CommentSection.module.css";

export default function CommentSection(props) {
    return (
        <div className={classes.commentSection}>
            <h1>Komentarze:</h1>
            <NewComment />
            <ul className={classes.commentList}>
                <Comment></Comment>
            </ul>
        </div>
    );
}