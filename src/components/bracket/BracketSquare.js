import React, { Component } from 'react'

import MakeBracketSquareInfo from "../../modules/bracket/MakeBracketSquareInfo"
import ConvertColumnToRound from "../../modules/bracket/ConvertColumnToRound"

class BracketSqaure extends Component {
    render() {
        const bracketObj = this.props.bracketObj
        const col = this.props.col
        const row = this.props.row
        let squareInfo = MakeBracketSquareInfo(col, row, bracketObj)
        let round = ConvertColumnToRound(col, bracketObj.columns)
        const classList = `BracketSquare ${squareInfo.classList}`
        return (
            <React.Fragment>
                <div className={`${classList}`} id={`${col}${row}--${squareInfo.itemKey}`}>
                    {squareInfo.itemText}
                    {
                        (classList.includes("Button"))
                            ? <div>
                                <button key={`${round}-${row}-${col}-Above`}
                                id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.advanceItemToNextRound(1,evt)
                                    }}
                                >
                                    U
                                </button>
                                <button key={`${round}-${row}-${col}-Below`}
                                id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.advanceItemToNextRound(3,evt)
                                    }}
                                >
                                    ?
                                </button>
                                <button key={`${round}-${row}-${col}-Randj`}
                                id={`${round}-${row}-${col}`}
                                    onClick={(evt) => {
                                        this.props.advanceItemToNextRound(2,evt)
                                    }}
                                >
                                    D
                                </button>
                            </div>
                            : null
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default BracketSqaure