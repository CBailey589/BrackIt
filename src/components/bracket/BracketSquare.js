import React, { Component } from 'react'

import MakeBracketSquareInfo from "../../modules/bracket/MakeBracketSquareInfo"
import ConvertColumnToRound from "../../modules/bracket/ConvertColumnToRound"

class BracketSqaure extends Component {
    render() {
        const bracketObj = this.props.bracketObj
        // const rounds = bracketObj.rounds
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
                        // ************************NEEDS TWEAKING***************************
                        // fontSize: `${18 / rounds + (squareScale * 4.5) + (round * 2)}px`
                        fontSize: `${3 + (squareScale ** 2) + (round * 2)}px`
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
                                    id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.advanceItemToNextRound(evt)
                                    }}
                                    style={{
                                        height: `${(1 * (squareScale + 1)) + (round * 3)}px`,
                                        width: `${(1 * (squareScale + 1)) + (round * 3)}px`,

                                        backgroundColor: `red`
                                    }}
                                >

                                </div>
                            </div>
                            : null
                    }
                    {
                        (classList.includes("ChampButtons"))
                            ? <div className="ButtonDiv">
                                <div key={`${row}-${col}`}
                                    id={`${round}-${row}-${col}--Champ`}
                                    onClick={(evt) => {
                                        this.props.pickChamp(evt)
                                    }}
                                    style={{
                                        height: `${(1 * (squareScale + 1)) + (round * 3)}px`,
                                        width: `${(1 * (squareScale + 1)) + (round * 3)}px`,

                                        backgroundColor: `red`
                                    }}
                                >

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