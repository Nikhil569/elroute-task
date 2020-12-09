import React from "react";
import video from "../../Videos/Pexels Videos 2689678.mp4";

const Landing1 = () => {
  return (
    <div className="card horizontal">
      <div className="card-image ">
        <video src={video} className="responsive-video" controls>
          Video to be diplayed
        </video>
      </div>
      <div className="card-stacked container">
        <div className="card-content">
          <div className="section">
            <h5>
              <b>APNA HOME</b>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Contrary
              to popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old.
            </p>
            <br />
            <div className="waves-effect waves-light btn yellow darken-3 ">
              REGISTER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing1;
