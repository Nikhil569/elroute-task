import React from "react";
import person from "../../Images/person.jpg";

const Landing3 = () => {
  return (
    <div className="container section">
      <h5 className="center black-text ">
        <b>Meet The Members</b>
      </h5>
      <div className="center grey-text">
        Alumni of IIT Bombay at your service
      </div>
      <br />

      <div className="row">
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={person} />
              <span className="black-text yellow darken-3">
                <b>Angelina Barin</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={person} />
              <span className="black-text yellow darken-3">
                <b>Angelina Barin</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={person} />
              <span className="black-text yellow darken-3">
                <b>Angelina Barin</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={person} />
              <span className="black-text yellow darken-3">
                <b>Angelina Barin</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={person} />
              <span className="black-text yellow darken-3">
                <b>Angelina Barin</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={person} />
              <span className="black-text yellow darken-3">
                <b>Angelina Barin</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing3;
