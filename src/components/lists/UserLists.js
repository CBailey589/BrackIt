import React, { Component } from 'react'
import ListCard from "./ListCard"
import "./Lists.css"

class UserLists extends Component {
    render() {
        let id = this.props.activeUser.id
        let usersLists = this.props.lists
        console.log(this.props.lists)
        return (
            <React.Fragment>
                <section className="">

                </section>
            </React.Fragment>
        )
    }
}

export default UserLists