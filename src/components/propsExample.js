import React, { Component } from 'react';
import Test5 from '../components/stateExample';
class PropsComponent extends Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (
            <div>
                <Test5 decrement={this.decrement} increment={this.increment} data={this.state.counter} />
            </div>
        )
    }
}

export default PropsComponent;