import React, { Component } from 'react';
import Test from './components/component1';
import Search from './components/search';



import './App.css';
import AxiosService from '../src/components/axiosService';
import PropsComponent from '../src/components/propsExample';


class App extends Component {
  state={
    data:[]
  }
 
  
  render() {
   
    return (
      <div className="App">
       
       <Search />
      </div>
    );
  }
}
export default App;
