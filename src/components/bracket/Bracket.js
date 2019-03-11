import React, { Component } from 'react'

import PrepareBracketList from "../../modules/bracket/PrepareBracketList"
import DetermineBracketAttributes from "../../modules/bracket/DetermineBracketAttributes"

class Bracket extends Component {
    render() {
        const list = this.props.globalLists.find(list =>
            list.id === parseInt(this.props.match.params.listId)) || { id: 404, name: "No List Found " }
        const items = this.props.globalListItems.filter(item => item.listId === list.id)
        const preparedArray = PrepareBracketList(items)
        DetermineBracketAttributes(preparedArray)



        return (
            <React.Fragment>
                <section className="">
                </section>
            </React.Fragment>
        )
    }
}

export default Bracket