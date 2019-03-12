import React, { Component } from 'react'

class BracketSqaure extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="BracketSquare">
                    ({this.props.col}, {this.props.row})
                </div>
            </React.Fragment>
        )
    }
}

export default BracketSqaure