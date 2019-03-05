// import { Route, Redirect } from "react-router-dom"
import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Login from "./authentication/Login"
import UserLists from "./userLists/UserLists"
import ListManager from "../modules/resourceManagers/ListManager"

class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        users: [],
        lists: []
    }

    componentDidMount() {
        debugger
        const newState = {}
        let prom1 = Promise.resolve(ListManager.GetByUser().then(json => newState.lists = json))
        Promise.all([prom1])
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/Login" render={(props) => {
                    return <Login
                        {...props} />
                }} />
                <Route exact path="/" render={() => {
                    return <UserLists/>
                }}/>

            </React.Fragment>
        )
    }
}

export default ApplicationViews