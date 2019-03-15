import React, { Component } from 'react';
class Serviced extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getData()
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                return res.json()
            })
            .then(rsponse => {
                console.log(rsponse)
                this.setState({ data: rsponse })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <div className='col-md-12'>
                    <div className="col-md-offset-2 col-md-6">
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Enter User Id" />
                                <input className="form-control" type="text" placeholder="Enter title" />
                                <input className="form-control" type="text" placeholder="Enter id" />
                                {this.state.data.map(stateData => <ul key={stateData.id}>
                                    <li>{stateData.title} </li>
                                </ul>)}
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
export default Serviced;