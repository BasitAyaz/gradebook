import React from "react";
import logo from "../assets/componentsimg/logo.png";
import { Link } from "react-router-dom";
import "./component.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "rgb(30,30,30)" }}>
          <div className="container py-4">
            <div className="row">
              <div className="col-md-4 py-3">
                <img src={logo} width="130px" />
              </div>
              <div className="col-md-4 py-3">
                <ul className="footerList">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 py-3 text-left">
                <div className="px-5">
                  <a
                    href="https://www.facebook.com/groups/2368073260159309"
                    target="_blank"
                    className="socialIcon"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a
                    href="https://wa.link/ohmzyl"
                    target="_blank"
                    className="socialIcon"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
