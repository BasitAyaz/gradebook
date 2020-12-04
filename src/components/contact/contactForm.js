import React from "react";
import "../component.css";
import caros from "../../assets/componentsimg/caros2.jpg";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 bg-light">
              <div className="container">
                <div className="py-4 text-left">
                  <h2>Contact Us</h2>
                </div>
                <div className="row">
                  <div className="col-md-6 py-3">
                    <input className="inp" placeholder="Name" />
                  </div>
                  <div className="col-md-6 py-3">
                    <input className="inp" placeholder="Subject" />
                  </div>
                  <div className="col-md-12 py-3">
                    <input className="inp" type="email" placeholder="Email" />
                  </div>
                  <div className="col-md-12 py-3">
                    <textarea
                      className="inp"
                      rows="8"
                      placeholder="Enter Your Message"
                    ></textarea>
                  </div>
                  <div className="col-md-12 py-3">
                    <button className="nextbtn">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage:`url(${caros})`,backgroundPosition:'center' }}
              className="col-md-4"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
