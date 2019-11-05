import React from "react";
import './styles/sidebar.css'

export default class Navbar extends React.Component {

    render () {
        return (
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Brand</a>
                </div>
                    
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Sign up</a></li>   
                        <li><a href="cart"><span class="glyphicon glyphicon-shopping-cart"></span></a></li>                      
                    </ul>
                </div>
              </div>
            </nav>
        )
    }
}