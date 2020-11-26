import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { saveData } from '../helpers/load_data';
import '../css/create.css';

let placeholder;

placeholder = "Tú puedes ingresar texto markdown ";
placeholder += "en este campo, por ejemplo, si usas ";
placeholder += "la siguiente estructura **negrita** ";
placeholder += "se imprimirá un texto en negritas.";

const CreateEntry = ({location}) => {

    const url = "https://joelgarcia99.github.io/UNIR-Deber-blog/";

    const [form, setForm] = useState({
        "title": "Título",
        "content": placeholder
    });
    const [preview, setPreview] = useState(false);

    const handlePreview = ()=>{
        setPreview(!preview);
    }

    const handleInputChange = ({target})=>{
        setForm({...form, [target.name]: target.value});
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        saveData(form);
        window.location = url;
    }

    return (
        <>
        <Header location={location}/>
        <div className="container">        
            <h1 className="hr">Crear un nuevo tema</h1>
            {
                !preview?
                    
                    <form>
                        <input 
                            placeholder="Título" 
                            className="title"
                            name="title"
                            onChange={handleInputChange}
                            value={form['title']}
                        />
                        <textarea
                            className="text-area"
                            name="content"
                            onChange={handleInputChange}
                            defaultValue={form['content']}
                        />
                    </form>
                    :<ReactMarkdown 
                        className="text-area" 
                        children={"# "+form['title']+"\n"+form['content']} 
                    />
            }

            <div className="options">
                <button onClick={handleFormSubmit}>
                    Guardar
                </button>
                <button onClick={handlePreview} className="button">
                    {
                        !preview?"Previsualizar":"Editar"
                    }
                </button>
            </div>
        </div>
        </>
    );
}

export default CreateEntry;
