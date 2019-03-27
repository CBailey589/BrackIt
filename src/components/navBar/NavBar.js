import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="NavBarLogo">
                    logo
                </div>
                <div className="HeaderWelcome">
                    Welcome {this.props.activeUser.firstName}
                </div>
                <ul className="">
                    {/* <li className="NavItem">
                        <Link className="nav-link" to="/">My Lists</Link>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default NavBar