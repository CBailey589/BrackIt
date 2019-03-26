import React, { Component } from 'react'

class ChampModalContent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ChampModalContent" id="ChampModalContent">
                And the champion is...<br />
                    {this.props.winner}!!!
                </div>
            </React.Fragment >
        )
    }
}


export default ChampModalContent