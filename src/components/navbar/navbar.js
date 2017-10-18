import React from 'react'
import './navbar.css'

export default class NavBar extends React.Component {
  render () {
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-header">
        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand">Travel Book</a>
    </div>
    <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">My Places</a></li>
            <li><a href="#">Explore</a></li>
        </ul>
        <form class="navbar-form navbar-left">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" />
        <div class="input-group-btn">
          <button class="btn btn-default" type="submit">
    <i class="glyphicon glyphicon-search"></i>
          </button>
        </div>
      </div>
    </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li class="loginPadding"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
</nav>
    )
  }
}
