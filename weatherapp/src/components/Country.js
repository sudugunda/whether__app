import React, { useState } from 'react'
import './Country.css'
import { useNavigate } from 'react-router-dom';

function Country() {

    const [country, setCountry] = useState("");
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/country-details:${country}`);
    }

    const handleChange = (e) => {
        setCountry(e.target.value);
        if(e.target.value.length >= 4){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

    return (
        <form className='country__form'>
            <input type="text" value={country} placeholder='country name' onChange={ (e) => handleChange(e) }/>

            <button onClick={(e) => handleSubmit(e)} disabled={disabled} style={disabled? {background:'rgb(93, 93, 233)'} : {background:'blue'} }>submit</button>
        </form>
    )
}

export default Country
