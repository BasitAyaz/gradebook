import React from "react";
import Navbar from "../components/navbar";
import Counter from "../components/home/counter";
import Books from "../components/home/books";
import Reviews from "../components/home/reviews";
import Footer from '../components/footer'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />

        <Counter />
        <Books />
        <Reviews />
        <Footer />
      </div>
    );
  }
}
