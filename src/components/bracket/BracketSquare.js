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
                    id={`${col}${row}--${squareInfo.itemKey}`}
                    style={{
                        height: `${vh / numRows * squareScale}px`,
                        width: `${vw / numCols * squareScale}px`,
                        fontSize: `${18 / rounds + (squareScale * 4.5) + (round * 2)}px`
                    }}
                >
                    {squareInfo.itemText}
                    {
                        (classList.includes("ButtonSquare"))
                            ? <div>
                                <button key={`${round}-${row}-${col}-Above`}
                                    id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.advanceItemToNextRound(1, evt)
                                    }}
                                >
                                    U
                                </button>
                                <button key={`${round}-${row}-${col}-Below`}
                                    id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.advanceItemToNextRound(3, evt)
                                    }}
                                >
                                    ?
                                </button>
                                <button key={`${round}-${row}-${col}-Randj`}
                                    id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.advanceItemToNextRound(2, evt)
                                    }}
                                >
                                    D
                                </button>
                            </div>
                            : null
                    }
                    {
                        (classList.includes("ChampButtons"))
                            ? <div>
                                <button key={`${row}-${col}-Left`}
                                    id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.pickChamp(1, evt)
                                    }}
                                >
                                    L
                                </button>
                                <button key={`${row}-${col}-Right`}
                                    id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.pickChamp(3, evt)
                                    }}
                                >
                                    ?
                                </button>
                                <button key={`${row}-${col}-Rand`}
                                    id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.pickChamp(2, evt)
                                    }}
                                >
                                    R
                                </button>
                            </div>
                            : null
                    }
                </div>
            </React.Fragment >
        )
    }
}

export default BracketSqaure