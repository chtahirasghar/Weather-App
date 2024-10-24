import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './Info.css'
export default function Info({ info }) {
    let Img_url = "https://images.unsplash.com/photo-1613931189161-1f4d2660bd1e?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let init_url = "https://img.freepik.com/free-photo/sunlight-passing-through-autumn-trees_23-2148224876.jpg";
    let hot_url = "https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/05/13155228/heatwave-image-O.jpg";
    let cold_url = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let rain_url = "https://i.ytimg.com/vi/EWmAonHyBYg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDIvcdbrSy14iTG13mSbxTCjCQ20Q";


    const hasAnyValue = (obj) => {
        return Object.values(obj).some(value => value);
    };
    return (
        <>
            {hasAnyValue(info) ?
                <div className='info-Box'>
                    <h2><i>WeatherInfo -- {info.weather}</i></h2>
                    <div className='cardContainer'>
                        <Card sx={{ maxWidth: 645 }}>
                            <CardMedia
                                sx={{ height: 190 }}
                                image={info.humidity > 80 ? rain_url : info.temp < 15 ? cold_url : info.temp > 38 ? hot_url : info.weather == 'clear sky' ? Img_url : init_url}
                                title="Weather Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {info.city} &nbsp;
                                    <span>
                                        {
                                            info.humidity > 80 ? <ThunderstormIcon color="primary" /> : info.temp < 15 ? <AcUnitIcon color="primary" /> : <WbSunnySharpIcon color="error" />
                                        }
                                    </span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="span">
                                    <p>Temperature = {info.temp}&deg;C</p>
                                    <p>Humidity = {info.humidity}</p>
                                    <p>Min Temp = {info.tempMin}&deg;C</p>
                                    <p>Max Temp = {info.tempMax}&deg;C</p>
                                    <p>The weather can be describe as <i>{info.weather}</i> and
                                        feels like {info.feels_like}&deg;C</p>
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>

                </div> : null}
        </>
    )
}
