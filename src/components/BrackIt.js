import React, { Component } from "react"
import Auth from "./authentication/Auth"

class BrackIt extends Component {
    // a function that returns true if sessionStorage contains the key BrackItId and false if it does not.
    isAuthenticated = () => sessionStorage.getItem("BrackItId") !== null

    state = {
        authTrigger: this.isAuthenticated()
    }

    // a function that can be passed down to a component to trigger a render.
    setAuth = () => {
        this.setState({ authTrigger: this.isAuthenticated() })
    }

    render() {
        return <React.Fragment>
            <Auth
                isAuthenticated={this.isAuthenticated}
                setAuth={this.setAuth}
            />
        </React.Fragment>
    }
}

export default BrackIt