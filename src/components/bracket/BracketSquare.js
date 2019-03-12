import React, { Component } from 'react'

import MakeBracketSquareInfo from "../../modules/bracket/MakeBracketSquareInfo"

class BracketSqaure extends Component {
    render() {
        const bracketObj = this.props.bracketObj
        const col = this.props.col
        const row = this.props.row
        let squareInfo = MakeBracketSquareInfo(col, row, bracketObj)
        const classList = `BracketSquare ${squareInfo.classList}`
        return (
            <React.Fragment>
                <div className={`${classList}`}>
                    {squareInfo.itemText}
                    {
                        (classList.includes("Button"))
                            ? <div>
                                <button key={`${col}-${row}-Above`}>
                                    U
                                </button>
                                <button key={`${col}-${row}-Below`}>
                                    D
                                </button>
                                <button key={`${col}-${row}-Rand`}>
                                    R
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