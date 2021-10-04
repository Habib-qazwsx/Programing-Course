import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Course from './Components/Course/Course';
import NotFound from './Components/Not Found/NotFound';



function App() {
  return (
    
    <div>
     
      <BrowserRouter>
      <Header></Header>

      <main style={{minHeight:"900px"}}>

        <Switch>
        <Route exact  path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/course">
          <Course></Course>
        </Route>

        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>
         
         <Route path="*">
           <NotFound></NotFound>
         </Route>
        </Switch>

        </main>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
