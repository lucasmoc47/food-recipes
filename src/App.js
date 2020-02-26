import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const APP_ID = 'ee6f1014'
	const APP_KEY = '9d317b5ec236286f10435076f7dcbda7'

	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		const getRecipes = async () => {
			const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
			const data = res.json()
	
			setRecipes(data.hits)
		}

		//getRecipes()
	}, [])

	return (
		<div className="App">
			<form className="search-form">
				<input type="text" className="search-bar"/>
				<button type="submit" className="search-button">Search</button>
			</form>
		</div>
	);
}

export default App;
