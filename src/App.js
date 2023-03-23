
import { useState } from 'react';
import './App.css';
import Card from './components/cards/Card';
import Footer from './components/Footer/Footer';
import NewsCard from './components/newsCard/NewsCard';
const api = {
  key : "30429c71872f6537f65afa6465704978",
  base : "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const data1={
    img: "img1",
    name : "Thunder",
    temp: 24,
    city: "Delhi"
  };
  const data2={
    img: "img2",
    name : "Cloudy",
    temp: 29,
    city: "Chennai"
  };
  const data3={
    img: "img3",
    name : "Sunny",
    temp: 40,
    city: "Jaipur"
  };

  const dateBuilder = (d) => {
    // let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    return `${day} ${date}/${month}/${year}`
  }

  // display time 
  let a = new Date()
  let hours = a.getHours();
  let minutes = a.getMinutes();

  //display time in 2 digits
  hours = hours <= 9 ? '0' + hours : hours;
  hours = hours > 12 ?  hours-12  : hours;
  minutes = minutes <= 9 ? '0' + minutes : minutes;

  var time = hours + ':' + minutes ;

  const [city, setCity] = useState('')
  const [mumbaiWeather, setMumbaiWeather] = useState({})
  setTimeout(() => {
    // weather('mumbai')
  },10);
  function weather(city){
    if(city !=''){
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setMumbaiWeather(result);
          console.log(result);
          setCity('');
        });
    }
  }

  return (
    <div className='app'>
      <div className="banner-container">

        {/* navbar  */}
        <div className="navbar">
          <ul>
            <li className='active'>Home</li>
            <li>Cities</li>
            <li>News</li>
          </ul>
        </div>

        {/* weather details  */}
        <div className="flex-right">
          <div className="weather-details">
            <div className="row">
              <h3>Weather Details</h3>
            </div>
            <div className="row">
              <p>Cloudy </p>
              {/* <p>{mumbaiWeather.clouds.all} %</p> */}
              <p>0%</p>
            </div>
            <div className="row">
              <p>Humidity </p>
              {/* <p>{mumbaiWeather.main.humidity}%</p> */}
              <p>61%</p>
            </div>
            <div className="row">
              <p>Wind </p>
              {/* <p>{mumbaiWeather.wind.speed}km/h</p> */}
              <p>3km/h</p>
            </div>
          </div>
        </div>

        {/* temperature details  */}
        <div className="temp-details">
          {/* <div className="temp">{Math.round(mumbaiWeather.main.temp)} <span>°</span> </div> */}
          <div className="temp">27 <span>°</span> </div>
          <div className="city-date">
            {/* <div className='city'>{mumbaiWeather.name}</div> */}
            <div className='city'> Mumbai </div>
            <div className='date'>{time} {dateBuilder(new Date())} </div>
          </div>
          <div className="sun-logo">
            <img src="./assets/sun-logo.png" alt=""/>
          </div>
        </div>
      </div>

      {/* Cities container  */}
      <div className="cities-container">
        <h2>Cities</h2>
        <div className="cards-container">
          < Card {...data1} />
          < Card {...data2} />
          < Card {...data3} />  
        </div>
      </div>

      {/* search city  */}
      <div className="search-box">
        <input type="text" placeholder='Search city' />
        < img src="./assets/search-icon.png" alt="" height='20px' width='20px' />
      </div>

      {/* earth container  */}
      <div className="earth-container">
        <img src="./assets/earth.png" alt=""/>
      </div>  

      {/* News container  */}
      <div className="cities-container">
        <h2>News</h2>
        <div className="cards-container">
          <NewsCard img="img1" headline="Thunder Strikes Delhi" />
          <NewsCard img="img2" headline="Cloudstorms in manipur" />
          <NewsCard img="img3" headline="It’s Summer season in Mumbai" />
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
