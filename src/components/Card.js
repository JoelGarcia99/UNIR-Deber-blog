import React from 'react';
import PropTypes from 'prop-types';
import '../css/card.css';
import { Link } from 'react-router-dom';

export const Card = React.memo(({entry}) => {

    return (
        <div className="card">
            <div>
                <h4>{entry.title}</h4>
                <blockquote>
                    <small><b>{entry.author.name}</b></small><small>{entry.date}</small>
                    <br/>
                    <small>{entry.count || 0} lecturas</small>
                </blockquote>
            </div>
            <br />
            <Link 
                className="button" 
                to={`/entry?entryID=${entry._id}`}
            >
                Leer publicación
            </Link>
        </div>
    );
});

Card.propTypes = {
    entry: PropTypes.object.isRequired
}
