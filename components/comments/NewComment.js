import { useRef } from 'react';

export default function NewComment() {
    const userNameInputRef = useRef();
    const commentInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredUserName = userNameInputRef.current.value;
        const enteredComment = commentInputRef.current.value;

        const newCommentData = {
            userName: enteredUserName,
            comment: enteredComment,
        }

        props.onAddEvent(newCommentData);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='userName'></label>
                    <input type='text' required id='userName' ref={userNameInputRef} placeholder='Your username' />
                </div>
                <div>
                    <label htmlFor='comment'></label>
                    <textarea
                        id='comment'
                        required
                        rows='2'
                        ref={commentInputRef}
                    ></textarea>
                </div>
                <div>
                    <button>Add Comment</button>
                </div>
            </form>
        </div>
    );
}