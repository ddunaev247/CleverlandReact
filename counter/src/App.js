import { Component } from 'react';
import './App.css';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.counter,
        };
    }
    increment = () => {
        if (this.state.counter < 10) {
            this.setState(state => ({ counter: state.counter + 1 }));
        }
    };
    decrement = () => {
        if (this.state.counter > -10) {
            this.setState(state => ({ counter: state.counter - 1 }));
        }
    };
    showRondomCount = () => {
        this.setState(() => ({
            counter: +(Math.random() * (10 - -10) + -10).toFixed(0),
        }));
    };
    resetCount = () => {
        this.setState(() => ({
            counter: this.props.counter,
        }));
    };
    render() {
        return (
            <div className="app">
                <div className="counter">{this.state.counter}</div>
                <div className="controls">
                    <button onClick={this.increment}>INC</button>
                    <button onClick={this.decrement}>DEC</button>
                    <button onClick={this.showRondomCount}>RND</button>
                    <button onClick={this.resetCount}>RESET</button>
                </div>
            </div>
        );
    }
}
