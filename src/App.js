import Axios from "axios";
import React, { useEffect,useState } from "react";
import Photo from "./Photo";
import Title from './Title';
import Date from './Date';
import About from './About';
import "./App.css";
import styled from "styled-components"


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
    <StyledApp className="App">
      
    <Title title={title}/>
    <Photo photo={photo}/>
    <About about={about}/>
    <Date date={date}/>
    </StyledApp>
  );
}
const StyledApp = styled.div`
background-image: url(https://images.unsplash.com/photo-1501862700950-18382cd41497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80)
`;

export default App;
