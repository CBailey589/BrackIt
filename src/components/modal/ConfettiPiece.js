import React, { Component } from 'react'

class ConfettiPiece extends Component {
    render() {
        var width = Math.random() * 8;
        var height = width * 0.4;
        var colorIdx = Math.ceil(Math.random() * 3);
        var color = "red";
        switch (colorIdx) {
            case 1:
                color = "yellow";
                break;
            case 2:
                color = "blue";
                break;
            default:
                color = "red";
        }
        return (
            <React.Fragment>
                <div className={`confetti-${this.props.idx} ${color}`}
                    key={`confetti-${this.props.idx}`}
                    style={{
                        // top: `${-Math.random() * 200}%`,
                        // top: `-2%`,
                        left: `${Math.random() * 100}%`,
                        animationName: "fallingConfetti",
                        animationDuration: `${Math.floor(Math.random() * 6) + 12}s`,
                        animationTimingFunction: "linear",
                        animationDelay: `${(Math.random() * 12)}s`,
                        animationDirection: "normal",
                        animationIterationCount: "infinite",
                        opacity: 0,
                        height: `${height}px`,
                        width: `${width}px`
                    }}>
                </div>
            </React.Fragment >
        )
    }
}


export default ConfettiPiece