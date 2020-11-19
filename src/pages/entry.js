// const gfm = require('remark-gfm');

import ReactMarkdown from 'react-markdown';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getParameterByName } from '../helpers/search_query';
import Reply from '../components/Reply';
import { Header } from '../components/Header';

import { loadDataById } from '../helpers/load_data';
import "../css/blog.css";

const ItemScreen = ({entryID, location}) => {

    const [entryData, setEntryData] = useState(undefined);

    useEffect(() => {
        setEntryData(
            loadDataById(entryID || getParameterByName("entryID", location))
        );
    }, []);   


    if(!entryData) {
        return (
            <>
            <Header location={location}/>
            <h2>Url rota {":("}</h2>
            </>
        );
    }

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
