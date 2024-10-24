import React from 'react'
import './SearchBox.css'
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    let [error, setError] = useState("");
    const API_KEY = "a25d617fbb056a98b19701d872b341eb";
    const URL_API = "https://api.openweathermap.org/data/2.5/weather"
    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let getWeatherInfo = async () => {
        try {
            let resp = await fetch(`${URL_API}?q=${city}&appid=${API_KEY}&units=metric`);
            let respJson = await resp.json();
            console.log("Current Weather: ", respJson);
            let result = {
                city: city,
                temp: respJson.main.temp,
                tempMin: respJson.main.temp_min,
                tempMax: respJson.main.temp_max,
                humidity: respJson.main.humidity,
                feels_like: respJson.main.feels_like,
                weather: respJson.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (e) {
            throw (e);
        }
    }
    let searchCity = async (e) => {
        try {
            e.preventDefault();
            console.log("Search city", city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
            setError("");
        }
        catch (e) {
            setError("No Such Place in Our App")
            updateInfo({});
        }
    }

    return (
        <>
            <div className='Weather-Box'>
                {/* <h1>Search for the Weather</h1> */}

                <form onSubmit={searchCity}>
                    <TextField id="city" fullWidth style={{ marginBottom: '10px', minWidth: '33%' }} label="City Name" required value={city} variant="outlined" onChange={handleChange} />
                    <br /><br />
                    <Button variant="contained" type="submit">SEARCH</Button>
                </form>
                {error && <Typography variant="h6" style={{ marginTop: '40px' }} color="error">{error}</Typography>}


            </div>
        </>
    )
}
