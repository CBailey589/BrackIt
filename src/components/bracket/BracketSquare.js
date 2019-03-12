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
                </div>
            </React.Fragment>
        )
    }
}

export default BracketSqaure