// const gfm = require('remark-gfm');

import ReactMarkdown from 'react-markdown';
import React from 'react';
import PropTypes from 'prop-types';

import { getParameterByName } from '../helpers/search_query';
import Reply from '../components/Reply';
import { Header } from '../components/Header';

import "../css/blog.css";
import { loadDataById } from '../helpers/load_data';

const ItemScreen = ({entryID}) => {

    let entryData = entryID || getParameterByName("entryID");
    entryData = loadDataById(entryData);

    console.log(entryData);

    return (
        <>        
        <Header />
        <div className="data">
            <div className="container hr">
                <div className="banner">
                    <img src={entryData.author.photo} />
                    <div>
                        <h2>{entryData.title}</h2>
                        <small><b>Autor: </b> {entryData.author.name}</small><br/>
                        <small><b>Creado el: </b> {entryData.date}</small>
                    </div>
                </div>
                <br/>
            </div>
            <ReactMarkdown 
                className="container" 
                children={entryData.message} 
            />
            <br/>
            <Reply entry={entryData}/>
        </div>
        </>
    );
}

ItemScreen.propTypes = {
    entry: PropTypes.object
}

export default ItemScreen;
