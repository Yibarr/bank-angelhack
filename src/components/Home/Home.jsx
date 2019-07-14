import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            enterprise:[],
            clients:[]
        }
    }

    componentDidMount(){
        axios.get(`https://angel-bank-backend.herokuapp.com/get/pymes`)
        .then(res=>{
            console.log(res.data)
            const enterprise = res.data;
            this.setState({enterprise});
        })

       
        axios.options(`https://s0kg6zbefh.execute-api.us-east-1.amazonaws.com/dev/v1/sandbox/checking-accounts/profile`,
        { params:{
            accountNumber:"406862574"
        }, 
        headers: {
            'Content-Type':"application/json;charset=UTF-8",
            'X-Client':"00fa49fff813470aad563d25064d6140",
            'X-User':"TEAM6",
            'X-Password':"454D61019C0449cfAd2f1C08BB5cE17e",
        }}
        )
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
