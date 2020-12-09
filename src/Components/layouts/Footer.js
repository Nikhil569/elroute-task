import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col s2">
            <div className="section">
              <h6>
                <b>CONTRACTOR</b>
              </h6>
              <div className="divider yellow darken-3"></div>
              <p>Electrical</p>
              <p>Civil</p>
              <p>General</p>
              <p>Construction</p>
              <p>Domestic</p>
              <p>Prime</p>
            </div>
          </div>

          <div className="col s2">
            <div className="section">
              <h6>
                <b>COMPANY</b>
              </h6>
              <div className="divider yellow darken-3"></div>
              <p>About</p>
              <p>Our Policy</p>
            </div>

            <div className="section">
              <h6>
                <b>SUPPORT</b>
              </h6>
              <div className="divider yellow darken-3"></div>
              <p>Contact</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className="col s2">
            <div className="section">
              <h6>
                <b>CONTACT FORM</b>
              </h6>
              <div className="divider yellow darken-3"></div>
              <form>
                <div className="input-field">
                  <input id="fullname" type="text" placeholder="Full Name" />
                </div>

                <div className="input-field">
                  <input id="email" type="email" placeholder="Email" />
                </div>

                <div className="waves-effect waves-light btn yellow darken-3 ">
                  SUBMIT
                </div>
              </form>
            </div>
          </div>

          <div className="col s6">
            <div className="section">
              <h6>
                <b>ABOUT APNA HOME</b>
              </h6>
              <div className="divider yellow darken-3"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <ul className="social-media-list">
                <li>
                  <a href="#" className="logo-pinterest">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="logo-rss">
                    <ion-icon name="logo-rss"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="logo-instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="logo-twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="logo-youtube">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright black">
        <div className="container center">
          © COPYRIGHT 2017 ALL RIGHT RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
