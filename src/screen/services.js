import React from "react";
import Navbar from '../components/navbar'

export default class BookPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div>
                 <Navbar />
                <h1>Services</h1>
            </div>
        )
    }
}