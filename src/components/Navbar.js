import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    <i className={this.props.icon}></i><span className="ml-2">{this.props.title}</span>
                </Link>
                <button className="navbar-toggler" data-target="#collapse" data-toggle="collapse"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse " id="collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to="about" className="nav-link">About</Link></li>
                    </ul>

                </div>


            </nav>

        )
    }
}

/*
Navbar.defaultProps=
    {
        title:'defaul github'
    }
*/

Navbar.propTypes =
    {
        title: PropTypes.string.isRequired
    }
export default Navbar
