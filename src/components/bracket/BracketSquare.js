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
                <div className={`${classList}`}>
                    {squareInfo.itemText}
                    {
                        (classList.includes("Button"))
                            ? <div>
                                <button key={`${round}-${row}-Above`}>
                                    U
                                </button>
                                <button key={`${round}-${row}-Below`}>
                                    D
                                </button>
                                <button key={`${round}-${row}-Randj`}>
                                    ?
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