import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
      }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
        this.setState({ 
            hasError: true 
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Error!</p>
                </div>
            )
        } else {
            return this.props.children
        }
    }
}