import React, { Component } from 'react'

import "./Lists.css"
import ListCard from './ListCard';


class UserLists extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="">
                    {
                        this.props.lists.map(list =>
                            <ListCard key={`list--${list.id}`}
                            listItems={this.props.listItems}
                            list={list} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default UserLists