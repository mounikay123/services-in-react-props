import React ,{Component} from 'react';
 
const getDataFromProps=(props)=>{
    console.log(props.data)
   return(
            <div>
                <h1>{props.data}</h1>
                <button type="button" className="btn btn-xs btn-primary" onClick={props.increment}>increment</button>
                <button type="button" className="btn btn-xs btn-success" onClick={props.decrement}>decrement</button>
            </div>
        );
   };
export default getDataFromProps;