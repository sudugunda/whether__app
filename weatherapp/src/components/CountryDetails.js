import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CountryDetails.css'
// import axios from 'axios';

function CountryDetails() {

    const initialState = { capital: '', population: 0, lating: 0.0, flag: null, imageUrl: '' };
    const initialDetailState = { temp: 0, whether_icon: '', wind_speed: 0, trecit: '' };

    const [data, setData] = useState(initialState);
    const [details, setDetails] = useState(initialDetailState);
    const [disabled, setDisabled] = useState(true);
    const {country} = useParams();

    const handleGetDetails = () => {
        setDisabled(false);
    }

    const YOUR_ACCESS_KEY = 'd8c12d85bdf10d3a31b32057227b5ecc';

    useEffect(() => {
        let params = new URLSearchParams({
            access_key: YOUR_ACCESS_KEY,
            query: country.substring(1),
            units: 'f'
        })
        fetch(`http://api.weatherstack.com/current?${params}`)
            .then((res) => res.json())
            .then((jsonData) => {
                console.log(jsonData);
                setData({capital: jsonData.location.name, population: 0, lating: jsonData.location.lat, flag: '', imageUrl: jsonData.current.weather_icons[0]})
                setDetails({temp: jsonData.current.temperature, whether_icon: jsonData.current.weather_icons[0], wind_speed: jsonData.current.wind_speed, trecit: '' })
            })
            .catch((error) => console.log(error))

    }, [])

    return (
        
        <div className='country__details__page'>
            <div className='country__details_item'>
                <p>Capital: {data.capital}</p>
                <p>population: {data.population}</p>
                <p>lating: {data.lating}</p>
                <p>Flag: {data.flag}</p>
                <img src={data.imageUrl} alt="flag"/>
                <button onClick={handleGetDetails}>capital</button>
            </div>

            { !disabled ?
            <div className='country__details_item'>
                <p>Temp: {details.temp}</p>
                <p>Wind_speed: {details.wind_speed}</p>
                <p>Trecit: {details.trecit}</p>
                <img src={details.whether_icon} alt="image" />
            </div>: ""
            }
        </div>
    )
}

export default CountryDetails
