import React from "react";
import customer from "../../Images/customer.png";

const Landing2 = () => {
  return (
    <div className="grey lighten-3">
      <div className="section">
        <h5 className="center black-text ">
          <b>Reasons You'll Us Too!</b>
        </h5>
        <div className="center grey-text">
          Our strength is seeing what doesn't exist yet!
        </div>
        <br />

        <div className="row black-text">
          <div className="col s4">
            <div className="img-with-content ">
              <img src={customer} />
              <div className="img-content">
                <p className="center">
                  <b>Background Check of Contractors</b>
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="img-with-content ">
              <img src={customer} />
              <div className="img-content">
                <p className="center">
                  <b>Background Check of Contractors</b>
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="img-with-content ">
              <img src={customer} />
              <div className="img-content">
                <p className="center">
                  <b>Background Check of Contractors</b>
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4 offset-s2">
            <div className="img-with-content ">
              <img src={customer} />
              <div className="img-content">
                <p className="center">
                  <b>Background Check of Contractors</b>
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="img-with-content ">
              <img src={customer} />
              <div className="img-content">
                <p className="center">
                  <b>Background Check of Contractors</b>
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
