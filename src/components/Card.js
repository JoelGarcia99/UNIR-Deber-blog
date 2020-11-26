import React from 'react';
import PropTypes from 'prop-types';
import '../css/card.css';

export const Card = React.memo(({entry}) => {

    const url = "https://joelgarcia99.github.io/UNIR-Deber-blog";

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
            <a 
                className="button" 
                href={`${url}/entry?entryID=${entry._id}`}
            >
                Leer publicación
            </a>
        </div>
    );
});

Card.propTypes = {
    entry: PropTypes.object.isRequired
}
