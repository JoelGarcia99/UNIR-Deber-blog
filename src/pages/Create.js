import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Header } from '../components/Header';
import '../css/create.css';
import { saveData } from '../helpers/load_data';

let placeholder;

placeholder = "Tú puedes ingresar texto markdown ";
placeholder += "en este campo, por ejemplo, si usas ";
placeholder += "la siguiente estructura **negrita** ";
placeholder += "se imprimirá un texto en negritas.";

const CreateEntry = () => {

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
        window.location = "/";
    }

    return (
        <>
        <Header />
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
                        >
                            {form['content']}
                        </textarea>
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
