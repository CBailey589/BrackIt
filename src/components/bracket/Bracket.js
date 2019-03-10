import React, { Component } from 'react'

class Bracket extends Component {
    render() {
        const list = this.props.globalLists.find(list =>
            list.id === parseInt(this.props.match.params.listId)) || { id: 404, name: "No List Found " }
        const items = this.props.globalListItems.filter(item => item.listId === list.id)

        console.log(list)
        console.log(items)


        return (
            <React.Fragment>
                <section className="">

                </section>
            </React.Fragment>
        )
    }
}

export default Bracket