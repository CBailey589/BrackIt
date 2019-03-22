import React, { Component } from "react"

import NavBar from "./navBar/NavBar"
import ApplicationViews from "./ApplicationViews"
import SideBar from "./sideBar/SideBar"
import Footer from "./footer/Footer"

import UserManager from "../modules/resourceManagers/UserManager"

export default class UserAccessLayer extends Component {
    state = {
        activeUser: {}
    }

    componentDidMount() {
        UserManager.GETONE(this.activeUserId())
            .then(activeUser => this.setState({ activeUser: activeUser }))
    }

    activeUserId = () => parseInt(sessionStorage.getItem("BrackItId"))

    render() {
        return (
            <React.Fragment>
                <NavBar
                    setAuth={this.props.setAuth}
                    activeUser={this.state.activeUser}
                />
                <ApplicationViews
                    activeUserId={this.activeUserId}
                    activeUser={this.state.activeUser}
                />
                <SideBar />
                <Footer />
            </React.Fragment>
        )
    }
}