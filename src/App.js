import React from 'react';
import "./App.css";
import Home from './components/pages/Home';
import Navbar from './common/Navbar/Navbar';
import About from './components/About/About';
import Gallery from './components/gallery/Gallery';
import Destinations from './components/Destinations/Home';
import  {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import { Routes } from 'react-router-dom';
import SinglePage from './SinglePage/SinglePage';
import Bookings from './components/Bookings/Bookings';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import BlogSingle from './components/Bookings/bookings-single-page/BookingsSingle';
import Review from './components/Review/Review';
import Testimonial from './components/Review/Testimonial';
import Pay from './components/pay/Pay';

function  App(){
    return (
        <>

        <Router>
       <Navbar/>
       <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/gallery' exact component={Gallery}></Route>
        <Route path='/destinations' exact component={Destinations}></Route>
        <Route path='/singlepage/:id' exact component={SinglePage}></Route>
        <Route path='/bookings' exact component={Bookings}></Route>
        <Route path='/blogsingle/:id' component={BlogSingle} />
        <Route path='/contact' exact component={Contact}></Route>
        <Route path='/sign-in' exact component={Login}></Route>
        <Route path='/register' exact component={Register}></Route>
        <Route path='/testimonial' exact component={Testimonial}></Route>
        <Route path="/pay">
            <Pay/>
        </Route>
        {/* <Route path="/success">
            <Success/>
        </Route> */}
       </Switch>
       </Router>
       </>
       
    );
}
export default App;
