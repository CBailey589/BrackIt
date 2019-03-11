import React, { Component } from 'react'

import PrepareBracketList from "../../modules/bracket/PrepareBracketList"
import DetermineBracketAttributes from "../../modules/bracket/DetermineBracketAttributes"
import AddressCodesRegionizer from '../../modules/bracket/AddressCodesRegionizer';
import SplitItemsToRegions from '../../modules/bracket/SplitItemsToRegions';

class Bracket extends Component {
    state = {
        bracketObj: {}
    }

    componentDidMount() {
        // const newState = {}

        const list = this.props.globalLists.find(list =>
            list.id === parseInt(this.props.match.params.listId)) || { id: 404, name: "No List Found " }
        const items = this.props.globalListItems.filter(item => item.listId === list.id)
        const preparedArray = PrepareBracketList(items)
        let bracketInfo = DetermineBracketAttributes(preparedArray)
        AddressCodesRegionizer(bracketInfo)
        console.log(preparedArray)
        console.log(bracketInfo)
        SplitItemsToRegions(preparedArray, bracketInfo)
    }

    render() {
        return (
            <React.Fragment>
                <section className="">
                </section>
            </React.Fragment>
        )
    }
}

export default Bracket