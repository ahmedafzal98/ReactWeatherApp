import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { Menu } from "./Menu";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import logo from "../../logo_white_cropped.png";
import { useCallback } from "react";
export default function () {
  const [posts, setPosts] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState([]);
  const [weather, setWeather] = useState({});

  const fetchItemData = (string, result) => {
    try {
      // console.log(string , result)
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${string}&limit=5&appid=d4d04688a9d2f3d90f7b83e0b39ac6f4`;

      fetch(url)
        .then((resp) => resp.json())
        .then((resp) => setPosts(resp));
    } catch (error) {
      console.log("Failed to fetch from Amazon DB", error);
    }
  };
  const fetchCityData = () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${weather.lat}&lon=${weather.lon}&appid=d4d04688a9d2f3d90f7b83e0b39ac6f4`;

      fetch(url)
        .then((resp) => resp.json())
        .then((resp) => setSelectedWeather(resp));
    } catch (error) {
      console.log("Failed to fetch from Amazon DB", error);
    }
  };

  useEffect(() => {
    fetchItemData();
  }, []);
  const handleOnHover = (result) => {
    // the item hovered
    console.log("Handle Hover" + result);
  };

  const handleOnSelect = (res) => {
    setWeather(res);
    fetchCityData();
  };
  const handleOnFocus = () => {
    console.log("handleOnFocus" + " Focused");
  };
//   const GMap = useCallback(() => {
//     return <SimpleMap lat={weather.lat} lon={weather.lon} />;
//   }, [weather]);
  const formatResult = (posts) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {posts.country}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {posts.name}
        </span>
      </>
    );
  };
  return (
    <div
      style={{
        margin: 10,
        height: 120,
        flex: 1,
        flexDirection: "row",
        display: "flex",
      }}
    >
      {/* LOGO */}
      <div
        style={{
          height: "70pt",
          width: "30pt",
          flex: 0.2,
          position: "Relative",
          right: 30,
          bottom: 5,
        }}
      >
        <div class="logo">
          <img src={logo} alt="" srcset="" />
        </div>
      </div>

      {/* SEARCH FIELD */}
      <div
        style={{
          height: 30,
          flex: 0.2,
          position: "Relative",
          right: "10%",
        }}
      >
        <div className="input-text">
          <ReactSearchAutocomplete
            placeholder="Weather in Your City"
            items={posts}
            onSearch={fetchItemData}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </div>

      <Menu />
    </div>
  );
}

// // menu

// function menu() {

// }

// const menu = (a, b) => {

//     return 2 * (a + b);
// }

// // <ReactSearchAutocomplete
// //     placeholder='Weather in Your City'
// //     items={posts}
// //     onSearch={fetchItemData}
// //     onHover={handleOnHover}
// //     onSelect={handleOnSelect}
// //     onFocus={handleOnFocus}
// //     autoFocus
// //     formatResult={formatResult}
// // />

// // const ReactSearchAutocomplete = (props) => {

// //     return (

// //         <div>{props.placeholder}

// //             <button onClick={props.onSearch(2)}></button>
// //         </div>

// //     )
// // }

// // <ReactSearchAutocomplete
// //     placeholder='Weather in Your City'
// //     onSearch="asas"
// // />

// const add = (props) => {

//     return props.a + props.b
// }

// const numbers = {
//     a: 10,
//     b: 10
// }

// add(numbers);
