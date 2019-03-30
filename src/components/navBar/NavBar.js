import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="NavBarLogo">
                </div>
                <div className="HeaderWelcome">
                    Welcome {this.props.activeUser.firstName}
                </div>
                <div className="NavBarLinks">
                    <Link to="/">
                        <button
                            onClick={(evt) => {
                                sessionStorage.removeItem("BrackItId")
                            }}>
                            Logout
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar