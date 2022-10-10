import React, { Component } from 'react'

export default class CountClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handlerMinus = () => {
        let currentCount = this.state.count
        currentCount--
        this.setState({
            count: currentCount
        })
    }
    handlerPlus = () => {
        let currentCount = this.state.count
        currentCount++
        this.setState({
            count: currentCount
        })
    }
    
    render() {
        return (
            <div>
                <h1>Count</h1>
                <div>
                    <button onClick={this.handlerMinus}>Count -</button>
                    <button onClick={this.handlerPlus}>Count +</button>
                </div>
                <div>{this.state.count}</div>
            </div>
        )
    }
}
