import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
    constructor(props){
        super(props);
        state={
            enterprise=[],
            clients=[]
        }
    }

    componentDidMount(){
        axios.get(`https://angel-bank-backend.herokuapp.com/get/pymes`)
        .then(res=>{
            const enterprise = res.data;
            this.setState({enterprise});
        })
        axios.get(`clientAPI`)
        .then(res=>{
            const clients = res.data;
            this.setState({clients});
        })

    }

        
    

    render() {
        return (
            <div>
                <h2>hey</h2>
            </div>
        )
    }
}

export default Home
