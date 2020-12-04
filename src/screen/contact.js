import React from "react";
import Navbar from '../components/navbar';
import ContactForm from '../components/contact/contactForm'

export default class BookPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div>
                 <Navbar />
            <ContactForm />
            </div>
        )
    }
}