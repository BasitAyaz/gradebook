import React from "react";
import "../component.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='back'>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 py-4">
              <div className="small bg-white shadow rounded p-5">
                <h1>
                  <i class="fas fa-book"></i>
                </h1>
                <h2>Books We Have</h2>
                <p className='countNumber'>786</p>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="small bg-white shadow rounded p-5">
                <h1>
                  <i class="far fa-user"></i>
                </h1>
                <h2>Total Members</h2>
                <p className='countNumber'>786</p>
              </div>
            </div>
            <div className="col-md-4 py-4">
              <div className="small bg-white shadow rounded p-5">
                <h1>
                  <i class="far fa-heart"></i>
                </h1>
                <h2>Happy Users</h2>
                <p className='countNumber'>786</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
