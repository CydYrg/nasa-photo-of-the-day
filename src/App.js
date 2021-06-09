import React from "react";
import React, { Component } from "react";
import AstronomyContainer from './components/AstronomyContainer';
import "./App.css";


function App() {
  import axios from "axios";
const apiKey = "keJGfKsMKsmMZPDSLpdvoEfw8Zs7AmIF7nhilnd3";
useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`)
    .then((res) => {
      setNasaData([...nasaData, ...res.data])
    })
    .catch((err) => {
      console.log(err)
    })
  }, [count])  
return (

<div className='App'>
<AstronomyContainer />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
