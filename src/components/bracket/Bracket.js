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

    advanceItemToNextRound = (num, evt) => {
        let newState = {}
        newState.bracketObj = this.state.bracketObj

        let id = evt.target.id.split("-")
        let round = parseInt(id[0])
        let row = parseInt(id[1])
        let col = parseInt(id[2])

        let multiplier = 0
        if (num === 1) {
            multiplier = -1
        } else if (num === 2) {
            multiplier = 1
        } else {
            let choice1Weight = this.state.bracketObj.AddressesWithItems[document.querySelector(`div[id^="${`${col}${row - 1 * (Math.pow(2, (round - 1)))}`}"]`).id.split("--")[1]].itemWeight || 0
            let choice2Weight = this.state.bracketObj.AddressesWithItems[document.querySelector(`div[id^="${`${col}${row + 1 * (Math.pow(2, (round - 1)))}`}"]`).id.split("--")[1]].itemWeight || 0

            if ((choice1Weight * Math.random()) > (choice2Weight * Math.random())) {
                multiplier = -1
            } else {
                multiplier = 1
            }
        }


        let idToFind = `${col}${row + multiplier * (Math.pow(2, (round - 1)))}`
        let squareWithItem = document.querySelector(`div[id^="${idToFind}"]`)

        let addressToAdvanceFrom = squareWithItem.id.split("--")[1]
        let addressToAdvanceTo = addressToAdvanceFrom.substring(0, addressToAdvanceFrom.length - 1)

        newState.bracketObj.AddressesWithItems[addressToAdvanceTo] = this.state.bracketObj.AddressesWithItems[addressToAdvanceFrom]

        for (let index = 1; index < addressToAdvanceTo.length; index++) {
            if (addressToAdvanceTo.length - index >= 2) {
                let furtherAddress = addressToAdvanceTo.substring(0, addressToAdvanceTo.length - index)
                newState.bracketObj.AddressesWithItems[furtherAddress] = ""
            } else if (addressToAdvanceFrom.length - index === 2) {
                newState.bracketObj.AddressesWithItems["winner"] = ""
            }
        }
        this.setState(newState)
    }

    pickChamp = (num, evt) => {
        let newState = {}
        newState.bracketObj = this.state.bracketObj

        let id = evt.target.id.split("-")
        let col = parseInt(id[2])
        let row = parseInt(id[1])

        let modifier = 0
        if (num === 1) {
            modifier = -1
        } else if (num === 2) {
            modifier = 1
        } else {
            let choice1Weight = this.state.bracketObj.AddressesWithItems[document.querySelector(`div[id^="${`${col - 1}${row - 1}`}"]`).id.split("--")[1]].itemWeight || 0
            let choice2Weight = this.state.bracketObj.AddressesWithItems[document.querySelector(`div[id^="${`${col + 1}${row - 1}`}"]`).id.split("--")[1]].itemWeight || 0

            if ((choice1Weight * Math.random()) > (choice2Weight * Math.random())) {
                modifier = -1
            } else {
                modifier = 1
            }
        }

        let idToFind = `${col + modifier}${row - 1}`
        let squareWithItem = document.querySelector(`div[id^="${idToFind}"]`)

        let addressToAdvanceFrom = squareWithItem.id.split("--")[1]

        newState.bracketObj.AddressesWithItems["winner"] = this.state.bracketObj.AddressesWithItems[addressToAdvanceFrom]

        this.setState(newState)
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
        } else {
            this.props.history.push("/")
        }
    }

    render() {
        let rowIdxs = this.state.bracketObj.rowIdxs
        let colIdxs = this.state.bracketObj.colIdxs
        let containerHeight = (this.state.bracketObj.rows * 20) + 10
        let containerWidth = (this.state.bracketObj.columns * 150) + 20
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
                                        bracketObj={this.state.bracketObj}
                                        advanceItemToNextRound={this.advanceItemToNextRound}
                                        pickChamp={this.pickChamp} />
                                ))
                        }
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Bracket