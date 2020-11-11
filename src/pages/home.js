import React, { useContext, useState } from 'react'
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { loadData } from '../helpers/load_data';

export const HomeScreen = () => {
    
    const [entries, setEntries] = useState(loadData());
    
    console.log(entries);
    return (
        <div>            
            <Header />
            <div className="container hr">
                <h3>Blogs creados</h3>
            </div>
            <ul className="row">
            {
                (entries.length < 1)? <span>Sin contenido</span>
                :entries.map(entry=>{
                    return (
                        <li key={entry._id}>
                            <Card entry={entry} key={entry._id} />
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}
