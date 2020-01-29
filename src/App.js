import React, {Component, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import People from "./People/People.js";
import Films from "./Films/Films.js";
import Planets from "./Planets/Planets.js";
import Species from "./Species/Species.js";
import Starships from "./Starships/Starships.js";
import Vehicles from "./Vehicles/Vehicles.js";


function App() {

  const [items, setItems] = useState([]);
  

  return (
    <Router>
    	<div className="App">
    		<Nav/>
    		<div className="container content">
    			
				<Switch>
	    			<Route path="/" exact component={Home}/>
	    			<Route path="/people" exact component={People}/>
	    			<Route path="/films" exact component={Films}/>
	    			<Route path="/starships" exact component={Starships}/>
	    			<Route path="/vehicles" exact component={Vehicles}/>
	    			<Route path="/species" exact component={Species}/>
	    			<Route path="/planets" exact component={Planets}/>
	    		</Switch>

	    		<div className="items">

	    		</div>
    		</div>
   		</div>
    </Router>
  );
}

 const Home = () =>(
	<h1>hi</h1>
)


export default App;
