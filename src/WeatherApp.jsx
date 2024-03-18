import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 25.95,
        humidity:  17,
        temp: 26.91,
        tempMax: 26.91,
        tempMin: 26.91,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            < SearchBox updateInfo={updateInfo}/>
            < InfoBox info={weatherInfo} />
        </div>
    )
}