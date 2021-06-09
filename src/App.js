import React, { Component, useEffect } from "react";
import AstronomyContainer from './AstronomyContainer';
import "./App.css";
import axios from "axios";
const apiKey = "keJGfKsMKsmMZPDSLpdvoEfw8Zs7AmIF7nhilnd3";

function App() {
  const [nasaData, setNasaData] = useState([])
  const [count, setCount] = useState(0)

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
    <div  className="App">

    </div>
    /*<div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}*/
  )}
export default App;
