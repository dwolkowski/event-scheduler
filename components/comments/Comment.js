import classes from "./Comment.module.css"

export default function Comment({userName="Kebabus", comment="Jakiś poważny bardzo przejmujący komentarz użytkownika", children}) {
    
    return(
        <li className={classes.post}>
            <h2>{userName}</h2>
            <p className={classes.comment}>{comment}</p>
        </li>
    );
}