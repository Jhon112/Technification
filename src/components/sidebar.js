import React from "react";
import './styles/sidebar.css'

export default class Sidebar extends React.Component {

    render () {
        return (
            < div>
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