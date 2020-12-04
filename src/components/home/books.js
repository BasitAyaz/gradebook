import React from "react";
import "../component.css";
import cover from "../../assets/componentsimg/bookcover.jpg";

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 my-2">
              <div className="bookCard">
                <img width="100%" src={cover} />
                <div className="p-3">
                  <h3>Management</h3>
                  <p className="text-muted">Auther</p>
                  <h4>BCom Part II</h4>
                  <button className="nextbtn">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="bookCard">
                <img width="100%" src={cover} />
                <div className="p-3">
                  <h3>Management</h3>
                  <p className="text-muted">Auther</p>
                  <h4>BCom Part II</h4>
                  <button className="nextbtn">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="bookCard">
                <img width="100%" src={cover} />
                <div className="p-3">
                  <h3>Management</h3>
                  <p className="text-muted">Auther</p>
                  <h4>BCom Part II</h4>
                  <button className="nextbtn">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="bookCard">
                <img width="100%" src={cover} />
                <div className="p-3">
                  <h3>Management</h3>
                  <p className="text-muted">Auther</p>
                  <h4>BCom Part II</h4>
                  <button className="nextbtn">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="bookCard">
                <img width="100%" src={cover} />
                <div className="p-3">
                  <h3>Management</h3>
                  <p className="text-muted">Auther</p>
                  <h4>BCom Part II</h4>
                  <button className="nextbtn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
