import React from "react";
import './styles/sidebar.css'

export default class Navbar extends React.Component {

    render () {
        return (
            < div className = "col-md-3 categories-container" >
                <h2>Categorias</h2>
                < ul className = "nav .nav-pills nav-stacked " >
                    <li class="active"><a href="/">Home</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Messages</a></li>
                </ul>
            </div>
        )
    }
}