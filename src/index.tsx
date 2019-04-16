import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

interface SquareProps {
    value: number;
}

class Square extends React.Component<SquareProps> {
    constructor(props: SquareProps) {
        super(props);
    }

    render() {
        return (
            <button
                className="square"
                // onClick={() => this.setState({ value: "X" })}
            >
                {this.props.value}
            </button>
        );
    }
}

type SquareType = string | null;

interface BoardProps {}

interface BoardStatus {
    squares: SquareType[];
}

class Board extends React.Component<BoardProps, BoardStatus> {
    constructor(props: BoardProps) {
        super(props);
    }

    renderSquare(i: number) {
        return <Square value={i} />;
    }

    render() {
        const status = "Next player: X";

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
