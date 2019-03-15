import React, { Component } from 'react';
import Test1 from '../components/component2';
class Header extends Component {
    state = {
        name:"abc"
    }
    render() {
        return (
            <div>
                <Test1 data={this.state.name} />
            </div>
        )
    }
}
export default Header;