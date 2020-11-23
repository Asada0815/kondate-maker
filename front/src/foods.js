import React, { Component } from 'react';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3500';
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class Foods extends Component {
    constructor(props) {
        super(props);
        this.state = {foods: []};
    }

    componentDidMount() {
        Axios.get("/get")
        .then(res => {
            const foods = res.data;
            this.setState({foods: foods});
        });
    }

    render() {
        
        return (
            <div classname="Foods">
                <h1>Foods</h1>
                <h2>{this.state.foods.length}</h2>
                {this.state.foods.map(food => {
                    console.log(food.id);
                    return <div>{food.name}  {food.price}</div>
                }
                )}
            </div>
        );
    } 
}

export default Foods;