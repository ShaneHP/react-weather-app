import './App.css';
import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';

const App = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            console.log('Latitude is:', lat);
            console.log('Longitude is:', long);

            /* async/await method */
            // const response = await fetch(
            //     `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
            // );
            // const responseJSON = await response.json();
            // setData(responseJSON);
            // console.log(responseJSON);

            /* .then() method */
            if (typeof lat == 'number' && typeof long == 'number') {
                fetch(
                    `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
                )
                    .then((res) => res.json())
                    .then((result) => {
                        setData(result);
                        console.log(result);
                    });
            }
        };
        fetchData();
    }, [lat, long]);

    return (
        <div className="App">
            {typeof data.main != 'undefined' ? (
                <Weather weatherData={data} />
            ) : (
                <div>
                    <Dimmer active>
                        <Loader>Loading...</Loader>
                    </Dimmer>
                </div>
            )}
        </div>
    );
};

export default App;
