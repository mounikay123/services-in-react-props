import React, { Component } from 'react';

import { Countries } from '../countries';
class Search extends Component {
    state = {
        countries: Countries,
        filtered: []

    }
 componentWillMount() {
        this.displayData(this.state.countries);
    }
    filterNames = (e) => {
   const filteredData = this.state.countries.filter((item) => {
            return e.target.value?item.name.includes(e.target.value):true
        })
        this.setState({
            filtered: filteredData
        });
        
          }
    displayData = (data) => (
        data.map((event) =>
            <ul key={event.code}>
                <li>{event.name}</li>
            </ul>
        ))
    render() {
        return (
            <div>
                <div className="container">
                    <input type="text" placeholder="Search Names" onChange={this.filterNames} />
                    {this.state.filtered.length >0 ? this.displayData(this.state.filtered) : this.displayData(this.state.countries)}
                </div>
            </div >
        )
    }
}
export default Search;