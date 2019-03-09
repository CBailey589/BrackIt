import React, { Component } from "react"
import UserManager from "../../modules/resourceManagers/UserManager"

export default class Login extends Component {

    state = {
        password: "",
        username: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = evt => {
        evt.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }
        if (this.state.username && this.state.password) {
            UserManager.MATCHLIKE("username", this.state.username)
                .then(users => {
                    // check to see if users has any objects
                    if (users.length) {
                        alert(`Username ${this.state.username} already exits!`)
                    } else {
                        UserManager.POST(newUser)
                            .then(user => {
                                sessionStorage.setItem("BrackItId", parseInt(user.id))
                                this.props.setAuth()
                            })
                    }
                })
        } else {
            alert("Please Fill Out Form 😬!")
        }
    }

    handleLogin = evt => {
        evt.preventDefault()
        if (this.state.username && this.state.password) {
            UserManager.CUSTOMSEARCH(`users?username=${this.state.username}&password=${this.state.password}`)
                .then(user => {
                    if (!user.length) {
                        alert("Incorrect username or password!")
                    } else {
                        sessionStorage.setItem("BrackItId", parseInt(user[0].id))
                        this.props.setAuth()
                    }
                })
        } else {
            alert("Please Fill Out Form 😬!")
        }
    }

    render() {
        return (
            <form className="loginForm">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputUsername">Username</label>
                <input
                    onChange={this.handleFieldChange}
                    type="username"
                    id="username"
                    placeholder={`Username`}
                    required=""
                    autoFocus=""
                />
                <label htmlFor="inputPassword">Password</label>
                <input
                    onChange={this.handleFieldChange}
                    type="password"
                    id="password"
                    placeholder={`Password`}
                    required=""
                />
                <button type="submit" onClick={this.handleLogin}>
                    Sign in
        </button>
                <button type="submit" onClick={this.handleRegister}>
                    Register
        </button>
            </form>
        )
    }
}