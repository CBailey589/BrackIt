import React, { Component } from 'react'
import ListCard from "./ListCard"
import "./Lists.css"

class UserLists extends Component {
    render() {
        let id = parseInt(sessionStorage.BrackItCredentials.split(",")[2].split(":")[1])
        let usersLists = this.props.lists.filter(list => list.userId === id)
        return (
            <React.Fragment>
                <section className="ListSection">
                    {
                        usersLists.map(list =>
                            <ListCard key={`listCard--${list.id}`}
                                list={list}
                            />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default UserLists