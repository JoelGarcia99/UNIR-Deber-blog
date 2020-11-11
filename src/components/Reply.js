import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommentBox from '../components/Comment';
import "../css/reply.css";
import { addComment } from '../helpers/load_data';

const Reply = ({entry}) => {
    
    const [comment, setComment] = useState();
    const [entryData, setEntryData] = useState(entry);

    const handleCommentChange = ({target})=>{
        setComment(target.value);
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        if(comment.length < 3) return;
        setComment("");
        setEntryData(addComment(comment, entryData._id));
    }

    return (
        <div className="container">
            <h4>Comentar</h4>
            <form className="comment-form hr">
                    <textarea
                        className="comment"
                        placeholder="Deja aquí tu comentario"
                        onChange={handleCommentChange}
                        value={comment}
                    />
                <button onClick={handleSubmit}>Comentar</button>
            </form>
            <h3>Comentarios</h3>
            {
                entryData.responses.length > 0?
                    entryData.responses.map((comment)=>{
                        return <CommentBox key={comment.key} comment={comment} />
                    }):<span>No hay comentarios</span>
            }
        </div>
    );
}

Reply.propTypes = {
    entry: PropTypes.object.isRequired
}

export default Reply;
