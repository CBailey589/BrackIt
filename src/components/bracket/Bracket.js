import React, { Component } from 'react'

import PrepareBracketList from "../../modules/bracket/PrepareBracketList"
import DetermineBracketAttributes from "../../modules/bracket/DetermineBracketAttributes"
import AddressCodesRegionizer from '../../modules/bracket/AddressCodesRegionizer'
import SplitItemsToRegions from '../../modules/bracket/SplitItemsToRegions'
import SendItemsToAddresses from "../../modules/bracket/SendItemsToAddresses"
import MakeRangeArrays from "../../modules/bracket/MakeRangeArrays"

import BracketSquare from "./BracketSquare"
import "./Bracket.css"

class Bracket extends Component {
    state = {
        bracketObj: {
            rows: 0,
            columns: 0,
            AddressesWithItems: {},
            columnInfo: [],
            rounds: 0,
            rowIdxs: [],
            colIdxs: []
        }
    }

    componentDidMount() {
        const newState = {}

        const list = this.props.globalLists.find(list =>
            list.id === parseInt(this.props.match.params.listId)) || { id: 404, name: "No List Found " }
        const items = this.props.globalListItems.filter(item => item.listId === list.id)
        const preparedArray = PrepareBracketList(items)
        if (preparedArray.length > 0) {
            let bracketInfo = DetermineBracketAttributes(preparedArray)
            bracketInfo = AddressCodesRegionizer(bracketInfo)
            bracketInfo = SplitItemsToRegions(preparedArray, bracketInfo)
            bracketInfo = SendItemsToAddresses(bracketInfo)
            newState.bracketObj = MakeRangeArrays(bracketInfo)
            this.setState(newState)
        }
    }

    render() {
        let rowIdxs = this.state.bracketObj.rowIdxs
        let colIdxs = this.state.bracketObj.colIdxs
        let containerHeight = (this.state.bracketObj.rows * 20) + 10
        let containerWidth = (this.state.bracketObj.columns * 150) + 75
        return (
            <React.Fragment>
                <section className="BracketView">
                    <section className="BracketSquareContainer" style={{ height: `${containerHeight}px`, width: `${containerWidth}px` }}>
                        {
                            rowIdxs.map(row =>
                                colIdxs.map(col =>
                                    <BracketSquare key={`col-${col}-row-${row}`}
                                        row={row}
                                        col={col}
                                        bracketObj={this.state.bracketObj} />
                                ))
                        }
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Bracket