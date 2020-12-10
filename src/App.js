import Axios from "axios";
import React, { useEffect,useState } from "react";
import "./App.css";


const url = "https://api.nasa.gov/planetary"
const apiKey = 'YmR4oZeCWEgkNW0e1diDIUaEcW9hsAegDBmB04gC'


function App() {

   const [photo, setPhoto] = useState(null);

   useEffect(()=> {
    const getAPOD = () => {
      Axios
      .get(`${url}/apod?api_key=${apiKey}&date=2012-03-14`) 
      .then((res => {
        console.log(res.data)
        setPhoto(res.data.hdurl)
        
      }))
      .catch(err => {
        console.log(err)
      })
    }
    getAPOD()
   },[])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    <img src={photo}/>
    </div>
  );
}

export default App;
