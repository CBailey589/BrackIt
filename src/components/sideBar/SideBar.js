import React, { Component } from "react"
import { Link } from "react-router-dom"

import "./SideBar.css"

class SideBar extends Component {
    render() {
        return (
            <div className="SideBar">
                    <div className="SideBarItem">
                        <Link className="nav-link" to="/">My Lists</Link>
                    </div>
            </div >
        )
    }
}

export default SideBar