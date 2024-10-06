import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Cafe } from './Pages/Cafe';
import { Orders } from './Pages/Orders';
import { About } from './Pages/About';
import { Find } from './Pages/Find';
import { Login } from './Pages/Login';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Coffee_Shop' element = {<Cafe/> }/>
        <Route path='/Orders' element = {<Orders/> }/>
        <Route path='/About' element = {<About/> }/>
        <Route path='/Find' element = {<Find/> }/>
        <Route path='/Login' element = {<Login/> }/>
      </Routes>
      <Footer/> 


      
      </BrowserRouter>
    </div>
  );
}

export default App;

