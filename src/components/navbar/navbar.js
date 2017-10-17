import React, { Component } from 'react';
import './navbar.css'

export default class NavBar extends Component
{
	render()
	{
    		return (
      			<div class='navbar'>
      				<a href="#home">Home</a>
  					<a href="#news">News</a>
  					<a href="#contact">Contact</a>
      			</div>
    		);
	}
}