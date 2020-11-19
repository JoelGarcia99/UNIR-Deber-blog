import React from 'react';
import PropTypes from 'prop-types';

import "../css/comment.css";

const CommentBox = ({comment}) => {
    return (
        <div className="comment-box">
            <span><h3>{comment.author_name}</h3> <small>{comment.date}</small></span>
            <span>{comment.message}</span>
        </div>
    )
}

CommentBox.propTypes = {
    comment: PropTypes.object.isRequired
}

export default CommentBox;
