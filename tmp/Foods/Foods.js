import React, { Component } from 'react';
import Axios from 'axios';
import {Grid, Paper} from '@material-ui/core';


Axios.defaults.baseURL = 'http://localhost:3500';
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class Foods extends Component {
    constructor(props) {
        super(props);
        this.state = this.data;
        this.updateList = this.updateList.bind(this);
        this.addFood = this.addFood.bind(this);
        this.clearTextbox = this.clearTextbox.bind(this);
    }

    data = {
        foods: [],
        textbox_name: "",
        textbox_price: "",
        textbox_calorie: "",
    }

    componentDidMount() {
        this.updateList();
    }

    async updateList() {
        const res = await Axios.get("/get");
        const foods = res.data;
        this.setState({foods: foods});
        console.log("update");
    }

    async addFood() {
        const food_name = this.state.textbox_name;
        const food_price = Number(this.state.textbox_price);
        const food_calorie = Number(this.state.textbox_calorie);
        this.clearTextbox();

        await Axios.post("/post", {name: food_name, price: food_price, calorie: food_calorie});
        this.updateList();
    }

    clearTextbox() {
        this.setState({
            textbox_name: "",
            textbox_price: "",
            textbox_calorie: ""
        });
    }

    render() {
        return (
            <div style={styles.root}>
                <Grid container justify="center">
                    <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            {this.state.foods.map(food => { return (
                                <Grid item xs={7}>
                                    <Paper style={styles.paper}>
                                        <h1>{food.name}  {food.price} {food.calorie}</h1>
                                    </Paper>
                                </Grid>
                            )})}
                        </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </div>

        );
    } 
}

const styles = {
    root: {
      paddingTop: "15px",
      paddingLeft: "10px",
    },
    paper: {
      padding: "5px",
      height: "70px",
      textAlign:"center",
    }
  };



export default Foods;