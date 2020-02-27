import React from 'react';

export default function Recipe({ title, calories, img, ingredients }) {
  return (
	<div className="">
		<h1>{title}</h1>
		<ul>
			{ingredients.map((ingredient, index) => (
				<li key={index}>{ingredient.text}</li>
			))}
		</ul>
		<p>Calories: {calories.toFixed(2)}</p>
		<img src={img} alt="recipe"/>
	</div>
  );
}
