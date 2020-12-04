import React from "react";
import logo from "../assets/componentsimg/logo.png";
import { Link } from "react-router-dom";
import "./component.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sticky-top">
       
        <div className="border-bottom bg-light">
          <nav class="navbar container navbar-expand-lg d-flex justify-content-between navbar-light">
          <div className="col-md-4 text-left">
              <Link to="/">
                <img src={logo} width="150px" />
              </Link>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>

                  {/* <li class="nav-item">
                    <a
                      id="modalActivate"
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalPreview"
                      class="navcolorIcon navIcon"
                      href="#"
                    >
                      <i class="fas fa-search"></i>
                    </a>
                    <a class="navcolorIcon navIcon" href="#">
                      <i class="fas fa-user"></i>
                    </a>
                    <a class="navcolorIcon navIcon" href="#">
                      <i class="fas fa-map-marker-alt"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* <div className='container'>
          <input className='search' placeholder='Search Books' />
        </div> */}
      </div>
    );
  }
}
