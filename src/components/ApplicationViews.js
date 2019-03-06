import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
// Module Resource Managers
import ListManager from "../modules/resourceManagers/ListManager"
import UserManager from "../modules/resourceManagers/UserManager"
// Components
import Login from "./authentication/Login"
import UserLists from "./lists/UserLists"



class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("BrackItCredentials") !== null

    state = {
        users: [],
        lists: []
    }

    componentWillMount() {
        // ******** UNCOMMENT LATER FOR TESTING!!!!****************
        // // // clears out BrackIt credentials
        // // if (sessionStorage.getItem("BrackItCredentials") !== null) {
        // //     sessionStorage.removeItem("BrackItCredentials")
        // // }

        const newState = {}
        let prom1 = Promise.resolve(ListManager.GetAll().then(json => newState.lists = json))
        let prom2 = Promise.resolve(UserManager.GetAll().then(json => newState.users = json))
        Promise.all([prom1, prom2])
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
                    if (this.isAuthenticated()) {
                        return <UserLists
                            lists={this.state.lists}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews