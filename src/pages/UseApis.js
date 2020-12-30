import React, { useState } from 'react';
import axios from 'axios';
import { get } from 'lodash';
import Back from '../components/back';
import Title  from '../components/title.js';


const UseApis = () => {

  const title = 'Use APIs';
  const [dataWeather, setDataWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = 'http://api.weatherapi.com/v1/forecast.json';
  const config = {
    params: {
      key: 'abd93d2d42ba43388c503011202710',
      q: 'Rosario santa fe',
      days: '7'
    },
  };

  const getWeather = () => {
    setLoading(true);
    axios.get(url, config)
    .then(response => {
      const days = get(response, 'data.forecast.forecastday', []);
      console.log('log days', response);
      setDataWeather(days);
    })
    .catch(() => {})
    .then(() => setLoading(false))
  }

  return (
    <div className="container mt-5 pt-5">
      <Title text={title}/>
      <Back/>
      <div className="card">
        <button onClick={getWeather} disabled={loading}>
          Get weather
        </button>
        {
          !!loading && 
          <>Loading...</>
        }
        <ul>
          {dataWeather.map(item => {
            return(
              <li key={item.date}>
                {item.date} &nbsp; - &nbsp; {item.day.condition.text} &nbsp; - &nbsp; <img src={item.day.condition.icon} height="40"/>
              </li>
            )
          })}
        </ul>  
      </div>
    </div>
  );
}

export default UseApis;