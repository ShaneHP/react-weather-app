import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const WeatherCard = ({ weatherData }) => {
    const refresh = () => {
        window.location.reload();
    };

    const iconURL = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    return (
        <div className="main">
            <div className="top">
                <p className="header">{weatherData.name}</p>
                <Button
                    className="button"
                    inverted
                    color="blue"
                    circular
                    icon="refresh"
                    onClick={refresh}
                ></Button>
            </div>
            <div className="flex">
                <p className="day">
                    {moment().format('dddd')}, {moment().format('LL')}
                </p>
                {/* <p className="description">{weatherData.weather[0].main}</p> */}
                <img src={iconURL} alt="NO DATA" />
            </div>

            <div className="flex">
                <p className="temp">Temperature: {weatherData.main.temp}°C</p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>

            <div className="flex">
                <p className="sunrise-sunset">
                    Sunrise:{' '}
                    {new Date(
                        weatherData.sys.sunrise * 1000
                    ).toLocaleTimeString('en-IE')}
                </p>
                <p className="sunrise-sunset">
                    Sunset:{' '}
                    {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                        'en-IE'
                    )}
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;
