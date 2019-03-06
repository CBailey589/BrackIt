import React, { Component } from "react"
import UserManager from "../../modules/resourceManagers/UserManager"

export default class Login extends Component {
    // Set initial state
    state = {
        email: "",
        pass: "",
        BrackItId: 0
    }

    // Update state whenever an input field is edited
    handleFieldChange = (event) => {
        const newState = {}
        newState[event.target.id] = event.target.value
        this.setState(newState)
    }

    // Simplistic handler for login submit
    handleLogin = (event) => {
        event.preventDefault()
        return UserManager.GetAll()
            // matches email entered into Login with email for user in database, and pulls users id to store in local storage
            .then((userArray) => userArray.filter(user => user.email === this.state.email)[0])
            .then((user) => this.setState({ id: user.id }))
            .then(() => {
                // for now just storing emal/pass/userId in local storage
                sessionStorage.setItem(
                    "BrackItCredentials",
                    JSON.stringify({
                        email: this.state.email,
                        pass: this.state.pass,
                        BrackItId: this.state.id
                    })
                )
                return
            })
            .then(() => this.props.history.push("/"))
    }

    render() {
        return (
            <form
                onSubmit={this.handleLogin}>
                <h1 className="">
                    Please Sign In
                </h1>
                <label
                    htmlFor="inputEmail">
                    Email address
                </label>
                <input
                    onChange={this.handleFieldChange}
                    type="email"
                    id="email"
                    placeholder="Email"
                    required="" autoFocus="" />
                <label
                    htmlFor="inputPassword">
                    Password
                </label>
                <input
                    onChange={this.handleFieldChange}
                    type="password"
                    id="pass"
                    placeholder="Password"
                    required="" />
                <button
                    type="submit">
                    Sign in
                </button>
            </form>
        )
    }
}