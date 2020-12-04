import React from "react";
import "../component.css";
import backCover from "../../assets/componentsimg/backCover.jpg";
import pro from "../../assets/componentsimg/pro.jpg";

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          style={{ backgroundImage: `url(${backCover})` }}
          className="back my-5"
        >
          <div
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
            className="py-5 text-white"
          >
            <div class="container">
              <div
                id="carouselContent"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active text-center p-4">
                    <div className="p-5">
                      <img className="viewimg" width="150px" src={pro} />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <hr />
                      <h2>Basit Ahmed</h2>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="p-5">
                      <img className="viewimg" width="150px" src={pro} />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <hr />
                      <h2>Basit Ahmed</h2>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselContent"
                  role="button"
                  data-slide="prev"
                >
                  <span className='rounded shadow bg-white' style={{
                    backgroundColor:'rgb(255,255,255)',
                    padding:'10px',
                    color:'#08476f',
                    fontSize:'2em'
                  }} aria-hidden="true">
                    <i class="fas fa-angle-left"></i>
                  </span> 
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselContent"
                  role="button"
                  data-slide="next"
                >
                  <span className='rounded shadow bg-white' style={{
                    backgroundColor:'rgb(255,255,255)',
                    padding:'10px',
                    color:'#08476f',
                    fontSize:'2em'
                  }} aria-hidden="true">
                    <i class="fas fa-angle-right"></i>
                  </span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
