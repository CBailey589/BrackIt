import React, { Component } from "react"
import NavBar from "./navBar/NavBar"
import ApplicationViews from "./ApplicationViews"

class BrackIt extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        );
    }
}

export default BrackIt