import React, { Component } from 'react';
import {instance} from '../components/instance';
class AxiosService extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getDataFromAxios()
    }
    getDataFromAxios = () => {
       instance.get('todos?id=2')
            .then(res => {
                console.log(res.data, "responsemu");
                this.setState({ data: res.data })
            })
            .catch(err => {
                console.log(err);
            });
    }
render() {
        return (
            <div>
                {this.state.data.map((stateData2) =>
                    <ul key={stateData2.id}>
                        <li>{stateData2.id}</li>
                    </ul>
                )
                }
            </div>
        )
    }
}
export default AxiosService;