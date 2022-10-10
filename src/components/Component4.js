import React, { Component } from 'react'

export default class Component4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            comments: []
        }
        this.myRef = React.createRef()
    }

    handler = () => {
        let currentCount = this.state.count
        currentCount++
        this.setState({
            count: currentCount
        })
    }

    addComment = () => {
        let currentComment = this.myRef.current.value
        let updateComments = this.state.comments
        updateComments.push(currentComment)
        this.setState({
            comments: updateComments
        })
        this.myRef.current.value = ''
    }

    render() {
        return (
            <div>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>Count +</button>
                </div>
                <div>{this.state.count}</div>
                <div>
                    <textarea ref={this.myRef}></textarea>
                </div>
                <div>
                    <button onClick={this.addComment}>Add comment</button>
                </div>
                <div>
                    <ul>
                        {this.state.comments.map((item, index) => <li key={index.toString()}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
