import React ,{useEffect, useState} from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './App.css';
import logo from './logo_white_cropped.png';
import bgimage from './bg-image.png';
import mapimage from './GoogleMapTA.jpg';
import slider from './sliding-img.png'
import graph from './weather_graph.jpg';
import apiImage from './one_call_api.png';
import historical_data_any_location from './historical_data_any_location.png';
import historical_data from './historical_data.png';
import icon_one_call from './icon_one_call.jpg';
import icon_alerts_push from './icon_alerts_push.png'
import icon_alerts_pull from './icon_alerts_pull.png'
import current from './current.png';
import forecasted_weather_data from './forecasted_weather_data.png';
import agro_field from './agro-field.jpg'
import icon1 from './icon-1.png';
import icon2 from './icon-2.png';
import icon3 from './icon-3.png';
import icon4 from './icon-4.png';
import icon5 from './icon-5.png';

function App() {

  const [posts,setPosts] = useState([])


    useEffect((string)=>{
      console.log("handleOnSearch " + string)
      weatherApiCall(string)
    },[])

  const weatherApiCall = (string,result)=>{
    console.log("weatherApiCall" + string , result)
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+string+'&limit=5&appid=d4d04688a9d2f3d90f7b83e0b39ac6f4';
    fetch(url).then(resp=>resp.json())
    .then(resp=>setPosts(resp))

  }
  const handleOnHover = (result) => {
    // the item hovered
    console.log("Handle Hover" + result)
  }

  const handleOnSelect = (posts) => {
    // the item selected
    console.log("handleOnSelect" + posts)
  }

  const handleOnFocus = () => {
    console.log("handleOnFocus" + ' Focused')
  }

  const formatResult = (posts) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {posts.country}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {posts.name}</span>
      </>
    )
  }

  return (
    <>

      <div className="Header">
        <div class="logo">

          <img src={logo} alt="" srcset="" />

        </div>

        <div className='input-text'>
        <ReactSearchAutocomplete
        placeholder='Weather in Your City'
            items={posts}
            onSearch={useEffect}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />

        </div>

        <nav class="navbar">
          <ul>
            <li><a href="#">Guide</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Marketplace</a> </li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Maps</a></li>
            <li><a href="#">Our Initiatives</a></li>
            <li><a href="#">Partners</a> </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">SignIn</a> </li>
            <li><a href="#">For Business</a></li>
            <li><a href="#">Support</a> </li>
          </ul>

        </nav>

      </div>

      <div class="bg-image">
        <img src={bgimage} alt="" srcset="" />
        <div className="orange-text">
          <h1><span>Open Weather</span></h1>
          <h4><b>Weather forecasts, nowcasts and history in fast <br /> and elegant way</b></h4>
        </div>


        <p class="red-text">
          Leaving everything behind, people are fleeing conflict in Ukraine. They need shelter, food, and water. When you
          <a href=""> subscribe to our service</a>
          , you can join us to help with <b>donation of just of £20</b> .
          <br />Openweather <b>will add £40</b> to each donation and send it to
          <a href="">   Disastrous Emergency Committee’s (DEC) </a>
          Ukrainian Humanitarian Appeal.
        </p>
      </div>

      <div class="gray-container">

        <form>
 
          <input type="text" placeholder='Search City' name="" />
          <input type="submit" value="Search" id='search-city-btn' />
        </form>
        <p className='diff-weat'>Different Weather?</p>
        <p className='metric'>Metric: °C, m/s</p>
        <p className='imperial'>Imperial: °F, mph</p>
      </div>

      <div className="main-container">

        <div className="weather-texts">

          <span>Jul 26, 04:09pm</span>
  
          {/* {posts.map(posts=><h2>{posts.name}</h2>)} */}
          
          <span className='temp'>21°C</span>
          <p className='feels-like'><b>Feels like 21°C. Overcast clouds. Light air</b></p>

          <div className="weather-items">

            <div className="vertical-line"></div>

            <ul>
              <li>1.5m/s NE</li>
              <li>1020hPa</li>
            </ul>

            <ul class="two">
              <li>Humidity: 75%</li>
              <li>UV: 0</li>
            </ul>

            <ul class="three">
              <li>Dew point: 13°C</li>
              <li>Visibility: 10.0km</li>
            </ul>
          </div>


        </div>
        <div class="map">

          <img src={mapimage} alt="" srcset="" />

        </div>
        <div className="weather-graph">
          <h3>Hourly Forecast</h3>
          <img src={graph} alt="" srcset="" />
        </div>
      </div>

      <div className="slider">
        <marquee behavior="scroll" direction="left">
          <img src={slider} />
        </marquee>
      </div>
      <div className="slider-below">

        <img src={apiImage} alt="" srcset="" />

        <span>APIs</span>
        <h2>
          <a href="">One Call API 3.0</a>
        </h2>
        <p>Subscribe to the new subscription plan <a href="/price"><b>"One Call by Call"</b></a> and get all weather data for any coordinates <b><a href="/api/one-call-3">with a single API call</a><b /></b>.<br />
          1,000 API calls per day for free! <a href="/price"><span class="orange-text">Pay as you call</span></a>. </p>
      </div>

      <div className="apiTable">
        <table id='apis'>
          <tr>
            <th>Included Data</th>
            <th>Time</th>

            <div className="horizontal-line"></div>
          </tr>
          <tr>
            <td> <b>Current</b> Weather</td>
            <td>Now</td>
          </tr>
          <tr>
            <td> <b>Minute</b> Forecast</td>
            <td>Next Hour</td>
          </tr>
          <tr>
            <td> <b>Hourly</b> Forecast</td>
            <td>Next 48 Hour</td>
          </tr>
          <tr>
            <td> <b>Daily</b> Forecast</td>
            <td>Next 8 days</td>
          </tr>

          <tr>
            <td>Hourly <b>Historical</b> Data</td>
            <td>40+ years back</td>
          </tr>
          <tr>
            <td>National Weather alerts</td>
            <td>All available Data</td>
          </tr>
        </table>
      </div>
      <div className="orangeArea">
        <div className="white-content">

          <big>
            <b>
              Use Our
              <span>
                <a href=""> Professional collections </a>
              </span>
              to get extended weather data for any <br /> coordinates on the globe
            </b>
          </big>
          <span id='orange-section-small-text'><br />For professionals and specialists with middle and large sized project, we recommend our Professional collections. They include either an extended data sets, or various tools for receiving and displaying data, etc.</span>
        </div>
        <div className="apiIcons">
          <a href="">
            <div>

              <img src={icon1} alt="" srcset="" />
            </div>
            <h3>
              Current <br /> Weather
            </h3>
            <span>(Current)</span>
          </a>
          <a href="">
            <div>

              <img src={icon2} alt="" srcset="" />
            </div>
            <h3>
              Hourly <br /> Forecast
            </h3>
            <span>(4 days)</span>
          </a>
          <a href="">
            <div>

              <img src={icon3} alt="" srcset="" />
            </div>
            <h3>
              Daily <br /> Forecast
            </h3>
            <span>(16 days)</span>
          </a>
          <a href="">
            <div>

              <img src={icon4} alt="" srcset="" />
            </div>
            <h3>
              Climatic <br /> Forecast
            </h3>
            <span>(30 Days)</span>
          </a>
          <a href="">
            <div>

              <img src={icon5} alt="" srcset="" />
            </div>
            <h3>
              Historical <br /> Weather
            </h3>
            <span>(1 month , 1 year)</span>
          </a>

        </div>
        <div>
          <p>
            <b>  Called by:</b>
            <br />
            geographic coordinates, zip/post code, city name, city ID, number of cities (only in current weather and forecast APIs)</p>
        </div>
      </div>

      <div className="below-orange-section">

        <div className='right-section'>
          <span>Weather data</span>
          <h2>
            Weather For
            <span className='orange-text'> any  </span>
            geographic <br /> coordinates on the globe
          </h2>
          <img src={historical_data_any_location} alt="" />
        </div>
        <div className="text">
          <p>
            For each point on the globe, we provide historical, current and <br /> forecasted weather data via light-speed APIs. <br />
            <br />
            <a href=""><b> Minute-by-minute forecast</b></a>
            <br />
            <br />

            <b>Other forecasts:</b>
            <br />
            <a href=""> hourly (4-day), daily (16-day), 30-day climate forecast</a>
            <br />
            <br />
            <a href=""> <b>Historical data</b></a>

            <br />
            with 40-year archive for any coordinates
          </p>
        </div>

      </div>

      <div className="grey-section">

        <div className="grey-section-right-area">
          <p>Detailed forecasts available by city name, city ID, geographic <br /> coordinates or postal/ZIP code. </p>


          <div class="vl"></div>
          <div className="to-obtain">

            <h2>How To obtain</h2>
            <p>
              <a href="">API</a>
            </p>
            <p>
              <a href="">Bulks</a>
            </p>

            <p>A variety of subscriptions with various limits on calls/min, <br /> data availability, and service</p>
          </div>

        </div>
        <div className="grey-section-left-area">
          <span>Weather Data</span>
          <h2>Forecasted weather data</h2>
          <img src={forecasted_weather_data} alt="" srcset="" />
        </div>
      </div>

      <div className="below-grey-section">
        <div className="right-section">
          <span>Weather Data</span>
          <h2>Historical Weather Data</h2>
          <img src={historical_data} alt="" srcset="" />
        </div>
        <div className="left-section">
          <p>Our new technology, <b> Time Machine</b>, has allowed us to enhance data in the <a href=""> Historical Weather Collection:</a> historical weather data is now available for any coordinates and the depth of historical data has been extended to 40 years.</p>
          <h3>How to Obtain</h3>
          <b><a href=""> Marketplace </a> of prepared data sets</b>
          <p>(cities, zip codes, grids)</p>
          <br />
          <b> <a href="">On-the-fly bulks</a> </b>
          <p>for customized lists of coordinates</p>

          <p>
            <b> <a href="">APIs</a> </b>
            (city-based, up to 1 year back; subscriptions with various <br /> limits on calls/min, data availability, and service)
          </p>
        </div>
      </div>


      <div className="grey-section-2">

        <div className="grey-section-right-area">
          <p>Access current weather data for any location on Earth including <br /> over 200,000 cities! The data is frequently updated based on the <br /> global and local weather models, satellites, radars and a vast <br /> network of weather stations. </p>


          <div class="vl"></div>
          <div className="to-obtain">

            <h2>How To obtain</h2>
            <p>
              <b>
                <a href="">API</a>
              </b>
              <br />
              (subscriptions with various limits on calls/min, data availability, and service)
            </p>
            <p>
              <b>
                <a href="">Prepared bulks</a>
              </b>
              <br />
              (cities, zip codes)
            </p>

          </div>

        </div>
        <div className="grey-section-left-area">
          <span>Weather Data</span>
          <h2> <a href=""> Current weather data</a></h2>
          <img src={current} alt="" srcset="" />
        </div>
      </div>
      <h2 className='product-heading'>Our <span> New </span> Product </h2>
      <div className="container">

        <div className="our-products">

          <div className="grid">
            <img src={icon_one_call} alt="" srcset="" />
            <p className="orange-text">
              <a href="">Solar Radiation API</a>
            </p>
            <p>This product provides users with current, forecast and historical solar radiation data for any coordinates on the globe. It includes DNI, DHI and GHI indices for the Clear Sky and Cloudy Sky models.</p>
          </div>

          <div className="grid">
            <img src={icon_alerts_push} alt="" srcset="" />
            <p className="orange-text">
              <a href="">Global weather alerts via push <br /> notifications</a>
            </p>
            <p>This product collects weather warnings from the major weather warning systems and presents them in a uniform and convenient data format. Push notification mechanism will allow to get timely notifications about severe weather.</p>
          </div>

          <div className="grid">
            <img src={icon_alerts_pull} alt="" srcset="" />
            <p className="orange-text">
              <a href="">Road Risk API</a>
            </p>
            <p>Enhance your short-term planning with Road Risk API by exploiting an accurate minute-by-minute forecast for 2 hours, hourly weather forecast and national alerts for five-days. The weather data is provided for any moment of time for 5 days ahead and 5 days back, covering any destination and any point along the route.</p>
          </div>

        </div>

      </div>
      {/* <div className="below-products">
        <div className="below-products-right-section">

          <div className="content">

            <span>AI and satellite imagery</span>
            <h2>
              <a href="">Agro Dashboard</a>
            </h2>
            <p>
              Dashboard is a visual service where you can easily work <br /> with satellite imagery and weather data for your fields. It <br /> is the visual demonstration of the data we provide <br /> through our <b> Agro API</b>:
            </p>

            <ul className='list'>
              <li>Crop map (soy, corn, wheat, etc.)</li>
              <li>Recognised field boundaries</li>
              <li>Vegetation indicies statistics by each recognised field</li>
              <li>Climate data for regions and particular field</li>
              <li>Soil and weather data</li>
            </ul>
            <a href="" className='round-btn'>Learn more</a>
          </div>

        </div>
        <div className="below-products-left-section">

          <div className="content">

            <span>AI and satellite imagery</span>
            <h2>
              <a href="">Agriculture analytics</a>
            </h2>
            <p>
              Based on large amount of processing satellite and climate data,<br /> we provide <b> analytical reports </b> and <b> detailed datasets </b> for crop <br /> monitoring:
            </p>

            <ul className='list'>
              <li>Crop map (soy, corn, wheat, etc.)</li>
              <li>Recognised field boundaries</li>
              <li>Vegetation indicies statistics by each recognised field</li>
              <li>Climate data for regions and particular field</li>
              <li>Soil and weather data</li>
            </ul>

          </div>
        </div>
      </div> */}

      <div className="above-footer-section">
        <div className="above-footer-section-right-section">
          <div className="text-block-orange-side">
            <div class="vl"></div>
            <h3><a href=""></a>Google Weather-Based Campaign <br />  Management with OpenWeatherMap API</h3>
            <p>Run your advertising campaign with the OpenWeatherMap <br /> API through Google AdWords</p>

            <a href="" className='round-btn'>View Solution</a>
          </div>

          <div className="text-block-orange-side">
            <div class="vl"></div>
            <h3><a href=""></a>Get weather data for free for open source <br /> project</h3>
            <p>We are happy to support open projects with open source <br /> code. If you need to make a large number of API calls and <br /> you have published your code on GitHub or BitBucket, <br /> please contact us and we will provide you with extended <br /> conditions.</p>

            <a href="" className='round-btn'>View Solution</a>
          </div>
        </div>
        <div className="above-footer-section-left-section">  


          <div className="text-block-orange-side">
            <div class="vl"></div>
            <h3><a href=""></a>8,000+ OpenWeatherMap weather API  repositories on GitHub</h3>
            <p>Find lots of workouts with our weather APIs on PHP, Java, <br /> Python, Go and many others on the Partners page together <br /> with 8,000+ repositories on GitHub</p>

            <a href="" className='round-btn'>View Solution</a>
          </div>

          <div className="text-block-orange-side">
            <div class="vl"></div>
            <h3><a href=""></a>Connect your weather station to <br /> OpenWeatherMap</h3>
            <p>We are glad to invite you to join our network of private <br /> weather stations. Today we have more than 80,000 <br /> weather stations around the world.</p>

            <a href="" className='round-btn'>Connect</a>
          </div>
        </div>

      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">

            <div className="footer-col">

              <p>Product Collections</p>
              <ul>
                <li><a href="">Current and Forecast APIs</a></li>
                <li><a href="">Historical Weather Data</a></li>
                <li><a href="">Weather Maps</a></li>
                <li><a href="">Weather Dashboard</a></li>
                <li><a href="">Widgets</a></li>
              </ul>
            </div>

            <div className="footer-col">

              <p>Subscription</p>
              <ul>
                <li><a href="">How to start</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Subscribe for free</a></li>
                <li><a href="">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-col">

              <p>Company</p>
              <p>OpenWeather is a team of IT experts and data scientists that has been practising deep weather data science. For each point on the globe, OpenWeather provides historical, current and forecasted weather data via light-speed APIs. Headquarters in London, UK.</p>
            </div>

            <div className="footer-col">

              <p>Technologies</p>
              <ul>
                <li><a href="">Our technology</a></li>
                <li><a href="">Accuracy and quality of weather data</a></li>
                <li><a href="">Connect your weather station</a></li>
              </ul>
            </div>


            <div className="footer-col">

              <p>Terms & Conditions</p>
              <ul>
                <li><a href="">Terms and conditions of sale</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Website terms and conditions</a></li>
              </ul>
            </div>

            <div className="footer-col">

              <ul>
                <li><a href="">About us</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">OpenWeather for Business</a></li>
                <li><a href="">Ask a question</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
export default App;
