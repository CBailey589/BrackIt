import React, { Component } from 'react'

import MakeBracketSquareInfo from "../../modules/bracket/MakeBracketSquareInfo"
import ConvertColumnToRound from "../../modules/bracket/ConvertColumnToRound"

class BracketSqaure extends Component {
    render() {
        const bracketObj = this.props.bracketObj
        const rounds = bracketObj.rounds
        const numRows = bracketObj.rows
        const numCols = bracketObj.columns
        const squareScale = this.props.squareScale
        const vw = this.props.vw
        const vh = this.props.vh
        const col = this.props.col
        const row = this.props.row
        let squareInfo = MakeBracketSquareInfo(col, row, bracketObj)
        let round = ConvertColumnToRound(col, bracketObj.columns)
        const classList = `BracketSquare ${squareInfo.classList}`
        return (
            <React.Fragment>
                <div
                    className={`${classList}`}
                    id={`${col}-${row}-${round}--${squareInfo.itemKey}`}
                    style={{
                        height: `${vh / numRows * squareScale}px`,
                        width: `${vw / numCols * squareScale}px`,
                        // ********NEEDS TWEAKING ON SIZE?*************
                        fontSize: `${(4 + (((7 - rounds) * 2) + (round * 1.5))) * squareScale}px`
                    }}
                    onClick={(evt) => {
                        try { this.props.advanceItemToNextRound(evt) }
                        catch (error) { }
                        if (evt.target.classList.contains("Final2") || evt.target.classList.contains("ChampButtons")) {
                            try { this.props.pickChamp(evt) }
                            catch (error) { }
                        }
                    }}
                >
                    {squareInfo.itemText}
                    {
                        (classList.includes("ButtonSquare"))
                            ? <div className="ButtonDiv">
                                <div key={`${round}-${row}-${col}`}
                                    className="BracketButton"
                                    id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.advanceItemToNextRound(evt)
                                    }}
                                    style={{
                                        // ********NEEDS TWEAKING ON SIZE?*************
                                        height: `${squareScale * 2.5 * ((2 * round)) * (7 - rounds)}px`,
                                        width: `${squareScale * 2.5 * ((2 * round)) * (7 - rounds)}px`,
                                        fontSize: `${squareScale * 2 * ((2 * round)) * (7 - rounds)}px`,
                                    }}
                                >
                                    ?
                                </div>
                            </div>
                            : null
                    }
                    {
                        (classList.includes("ChampButtons"))
                            ? <div className="ButtonDiv">
                                <div key={`${row}-${col}`}
                                className="BracketButton"
                                    id={`${round}-${row}-${col}--Champ`}
                                    onClick={(evt) => {
                                        this.props.pickChamp(evt)
                                    }}
                                    style={{
                                        // ********NEEDS TWEAKING ON SIZE?*************
                                        height: `${squareScale * 2.5 * ((2 * round)) * (7 - rounds)}px`,
                                        width: `${squareScale * 2.5 * ((2 * round)) * (7 - rounds)}px`,
                                        fontSize: `${squareScale * 2 * ((2 * round)) * (7 - rounds)}px`
                                    }}
                                >
                                    ?
                                </div>
                            </div>
                            : null
                    }
                </div>
            </React.Fragment >
        )
    }
}

export default BracketSqaure