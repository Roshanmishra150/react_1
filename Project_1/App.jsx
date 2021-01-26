import react from "react";
import About from "../Project_1/About"
import Contact from "../Project_1/Contact"
import Service from "../Project_1/Service"
import Home from "../Project_1/Home"
import Navbar from "../Project_1/Navbar"
import { Route, Switch ,Redirect } from "react-router-dom";
import Footer from "./Footer"


const App = () => {


    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/roshan" component={Service}/>
            <Route exact path="/shani" component={Service}/>
            <Route exact path="/sushil" component={Service}/>
            <Route exact path="/taufiq" component={Service}/>
            <Redirect to="/" /> 
        </Switch>
        <Footer/>
        </>
    )
}
export default App;