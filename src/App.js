import React, { useState, useEffect } from 'react';
import './App.css';

import Recipe from './components/Recipe'

function App() {
	const APP_ID = 'ee6f1014'
	const APP_KEY = '9d317b5ec236286f10435076f7dcbda7'

	const [recipes, setRecipes] = useState([])
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('chicken')

	useEffect(() => {
		async function getRecipes() {
			const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
			const data = await res.json()

			console.log(data.hits)

			setRecipes(data.hits)
		}

		getRecipes()
	}, [query])

	function handleChange(event) {
		const { value } = event.target

		setSearch(value)
	}

	function handleSubmit(event) {
		event.preventDefault()

		setQuery(search)
		setSearch('')
	}

	return (
		<div className="App">
			<form className="search-form" onSubmit={handleSubmit}>
				<input type="text" className="search-bar" value={search} onChange={handleChange}/>
				<button type="submit" className="search-button">Search</button>
			</form>
			{recipes && recipes.map(recipe => (
				<Recipe
					key={recipe.recipe.label}
					title={recipe.recipe.label}
					calories={recipe.recipe.calories}
					img={recipe.recipe.image} 
				/>
			))}
		</div>
	);
}

export default App;
