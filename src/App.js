import Axios from "axios";
import React, { useEffect,useState } from "react";
import Photo from "./Photo";
import Title from './Title';
import Date from './Date';
import About from './About';
import "./App.css";


const url = "https://api.nasa.gov/planetary"
const apiKey = 'YmR4oZeCWEgkNW0e1diDIUaEcW9hsAegDBmB04gC'


function App() {

   const [photo, setPhoto] = useState(null);
   const [title, setTitle] = useState(null);
   const [date, setDate] = useState(null);
   const [about, setAbout] = useState(null);
   

   useEffect(()=> {
    const getAPOD = () => {
      Axios
      .get(`${url}/apod?api_key=${apiKey}&date=2012-03-14`) 
      .then((res => {
        console.log(res.data)
        setPhoto(res.data.hdurl)
        setTitle(res.data.title)
        setDate(res.data.date)
        setAbout(res.data.explanation)
        
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
    <Title title={title}/>

    <Photo photo={photo}/>
    <About about={about}/>

    <Date date={date}/>
    </div>
  );
}

export default App;
