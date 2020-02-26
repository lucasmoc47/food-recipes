import React from 'react';

export default function Recipe({ title, calories, img }) {
  return (
	<div className="">
		<h1>{title}</h1>
		<p>{calories}</p>
		<img src={img} alt="recipe"/>
	</div>
  );
}
