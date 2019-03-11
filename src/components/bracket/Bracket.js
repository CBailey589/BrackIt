import React, { Component } from 'react'

import PrepareBracketList from "../../modules/bracket/PrepareBracketList"
import DetermineBracketAttributes from "../../modules/bracket/DetermineBracketAttributes"
import AddressCodesRegionizer from '../../modules/bracket/AddressCodesRegionizer'
import SplitItemsToRegions from '../../modules/bracket/SplitItemsToRegions'
import SendItemsToAddresses from "../../modules/bracket/SendItemsToAddresses"

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
            rowIdxArray: [],
            columnIdxArray: []
        }
    }

    componentDidMount() {
        const newState = {}

        const list = this.props.globalLists.find(list =>
            list.id === parseInt(this.props.match.params.listId)) || { id: 404, name: "No List Found " }
        const items = this.props.globalListItems.filter(item => item.listId === list.id)
        const preparedArray = PrepareBracketList(items)
        let bracketInfo = DetermineBracketAttributes(preparedArray)
        AddressCodesRegionizer(bracketInfo)
        SplitItemsToRegions(preparedArray, bracketInfo)
        newState.bracketObj = SendItemsToAddresses(bracketInfo)
        console.log(newState.bracketObj)
        this.setState(newState)
    }

    render() {

        let rows = []
        for (var row = 1; row === this.state.bracketObj.rows; row++) {
            rows[row] = row
        }
        console.log(this.state.bracketObj.rows)
        console.log("rows:", rows)
        let columns = []
        for (var col = 1; col === this.state.bracketObj.columns; col++) {
            columns.push(col)
        }
        console.log(this.state.bracketObj.columns)
        console.log("columns:", columns)
        return (
            <React.Fragment>
                <div>
                    {
                        columns.map(colIdx =>
                            rows.map(rowIdx =>
                                <BracketSquare
                                    colIdx={this.colIdx}
                                    rowIdx={this.rowIdx}
                                    bracketObj={this.state.bracketObj}
                                />
                            )
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Bracket