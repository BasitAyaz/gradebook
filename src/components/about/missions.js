import React from "react";
import "../component.css";
import cover from "../../assets/componentsimg/bookcover.jpg";

export default class Missions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <h2>Visions and Missions</h2>
            <p>
              Over Mission is to provide books and provide easines to the
              students.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
