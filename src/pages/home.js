import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { loadData } from '../helpers/load_data';

const HomeScreen = ({location}) => {
    
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        setEntries(loadData());
    }, []);
    
    return (
        <div>            
            <Header location={location}/>
            <div className="container hr">
                <h3>Blogs creados</h3>
            </div>
            <ul className="row">
            {
                (entries.length < 1)? <span>Sin contenido</span>
                :entries.map(entry=>{
                    return (
                        <li key={entry._id}>
                            <Card 
                                entry={entry} 
                                key={entry._id} 
                            />
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}

export default HomeScreen;
