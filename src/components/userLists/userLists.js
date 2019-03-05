import React, { Component } from 'react'

class UserLists extends Component {
    render() {
        return (
            <section className="">
                <h3>Hi! Im User {sessionStorage.credentials}</h3>
            </section>
        )
    }
}

export default UserLists