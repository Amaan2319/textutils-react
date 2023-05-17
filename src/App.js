import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import { useState } from 'react';
// import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes, Route,
  Link
} from "react-router-dom";

function App() {

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='grey';
        document.body.style.color='white';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor= 'white';
        document.body.style.color='black';
      }
    }

    const greenModeHandler = () => {
      if(mode == 'light'){
        setMode('succes');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
      }
    }
  
  return (
    <>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
    <Router>
      
    <Navbar title='TextUtils' mode= {mode} toggleMode = {toggleMode} greenModeHandler = {greenModeHandler} about='About us' />

    <div className="container ">
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>

      <Routes>
        <Route path='/' element={<TextForm/>}/>
      </Routes>
    </div>
   
    </Router>












      {/* <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />

      <Navbar title="TextUtils" about="About"  />
      <About />
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script> */}

    </>
  );
}

export default App;
