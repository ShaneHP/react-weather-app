import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
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
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
            );
            const responseJSON = await response.json();
            setData(responseJSON);
            console.log(responseJSON);
            /* .then() method */

            // fetch(
            //     `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
            // )
            //     .then((res) => res.json())
            //     .then((result) => {
            //         setData(result);
            //         console.log(result);
            //     });
        };
        fetchData();
    }, [lat, long]);

    return <div className="App"></div>;
}

export default App;
