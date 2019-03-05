import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import Login from "./authentication/Login"

class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {}

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews