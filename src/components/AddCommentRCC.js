import React, { Component } from 'react'

export default class AddCommentRCC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
        this.myRef = React.createRef()
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
                <h1>Add comment</h1>
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
