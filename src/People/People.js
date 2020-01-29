import React, {useEffect, useState} from 'react';

function People(){

	useEffect(()=>{
		getData();
	},[]);

	const [items, setItems] = useState([]);

	const getData = async () =>{
	  	const response = await fetch(`https://swapi.co/api/people/`);
	  	const data = await response.json();
	  	setItems(data);
	  	//return data;
	}

	setTimeout(()=>{
		console.log(items.results);
	},5000)

	// const fetchData = async ()=>{
	// 	fetch("https://swapi.co/api/people").then(async (results, key)=>{
	// 		let item = await results.json();
	// 		setItems(item);
	// 	})
	// };

	// fetchData();

	// const getItem = async ()=>{
	// 	const result = await getData();
	// 	//console.log(result);
	// 	return result;
	// }

	return(
		<div className="App">
			
			{
				// <h1>{items.results.name}</h1>
				
				// items.results.map(
				//  	item=>(	
				//  		 	<h1>{item.name}</h1>
				//  	)
				//  )
			}	
				
			
		</div>
	)

}

export default People;