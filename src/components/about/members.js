import React from "react";
import "../component.css";
import pro from "../../assets/componentsimg/pro.jpg";
import pro2 from "../../assets/componentsimg/pro2.jpg";
import pro3 from "../../assets/componentsimg/pro3.jpg";

export default class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2>Over Team Members</h2>
          <p>these are over team members who play very important role in over Team</p>
          <div className="row">
            <div className="col-md-3 memberCard p-4">
              <div className="member">
                <img className="memberImg" src={pro} width="100%" />
                <div className="p-4">
                  <h4>Basit Ahmed</h4>
                  {/* <div className='social'>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-facebook"></i></a>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-instagram"></i></a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-3 memberCard p-4">
              <div className="member">
                <img className="memberImg" src={pro2} width="100%" />
                <div className="p-4">
                  <h4>Noman</h4>
                  {/* <div className='social'>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-facebook"></i></a>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-instagram"></i></a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-3 memberCard p-4">
              <div className="member">
                <img className="memberImg" src={pro3} width="100%" />
                <div className="p-4">
                  <h4>Basit Ahmed</h4>
                  {/* <div className='social'>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-facebook"></i></a>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-instagram"></i></a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-3 memberCard p-4">
              <div className="member">
                <img className="memberImg" src={pro} width="100%" />
                <div className="p-4">
                  <h4>Basit Ahmed</h4>
                  {/* <div className='social'>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-facebook"></i></a>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-instagram"></i></a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-3 memberCard p-4">
              <div className="member">
                <img className="memberImg" src={pro} width="100%" />
                <div className="p-4">
                  <h4>Basit Ahmed</h4>
                  {/* <div className='social'>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-facebook"></i></a>
                      <a className='socialIcon' href="https://www.facebook.com/basitahmed786/"><i class="fab fa-instagram"></i></a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
