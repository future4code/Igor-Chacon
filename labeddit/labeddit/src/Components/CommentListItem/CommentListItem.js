import React from 'react';

const CommentListItem = (props) => {

    return (
        <div>
            <div>
                <button>↑</button>
                <div>{props.comment.votesCount}</div>
                <button>↓</button>
            </div>
            
            {props.comment.username}: {props.comment.text}
            <hr />
        </div>
    )
}

export default CommentListItem;