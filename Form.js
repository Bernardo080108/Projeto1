import React, { useState } from "react";
import './Form.css';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Form = () => {
    
    const initialVelue= {
        title: '',
    }

const [values, setValues] = useState(initialVelue);
const history = useHistory


function onChange(ev) {
    const {name, value} = ev.target;

    setValues({ ...values, [name]: value});
}

function onSubmit(ev){
    ev.preventDefault()

    axios.post('http://localhost:5000/beachs', values)
    .then((response) => {
        history.push('/')
    })
}

    return(
        <div>
            <h1>Nova Praia</h1>
            
            <form onSubmit={onSubmit}>
                <div className="new-form_group">
                    <label htmlFor="title">Nome</label>
                    <input id="title" name="title" type="text" onChange={onChange}/>
                </div>
                <div className="new-form_group">
                    <label htmlFor="title">Bairro</label>
                    <input id="title" name="title" type="text" onChange={onChange}/>
                </div>
                <div className="new-form_group">Status
                    <select htmlFor="title">Própria</select>
                    <select htmlFor="title">Imprópria</select>
                    <input id="title" name="title" type="button" onChange={onChange}/>
                </div>
                <div className="new-form_group">Acessivel
                    <select htmlFor="title"> Sim</select>
                    <select htmlFor="title"> Não</select>
                    <input id="title" name="title" type="button" onChange={onChange}/>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;