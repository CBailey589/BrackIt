import React, { Component } from 'react'

import "./Lists.css"
import ListCard from './ListCard';


class UserLists extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="">
                    {
                        this.props.usersLists.map(list =>
                            <ListCard key={`list--${list.id}`}
                                usersListItems={this.props.usersListItems}
                                list={list}
                                changeItemStatus={this.props.changeItemStatus} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default UserLists