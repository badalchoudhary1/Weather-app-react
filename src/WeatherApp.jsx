import { useState } from 'react'
import InfoBox from './Infobox'
import SearchBox from './SearchBox'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        feelsLike: 15.59,
        humidity : 72,
        temp: 16.05,
        tempMax: 16.05,
        tempMin: 16.05,
        weather: "haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo); 
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Badal</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}