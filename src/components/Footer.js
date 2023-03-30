import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className="footer-upper">
        <div className="container-xxl py-5">
          <div className="row">
            <div className="col-6">
              <div className="d-flex gap-15 align-items-end">
                <img src="images/newsletter.png" alt="" />
                <p>Sign Up for newsletter</p>
              </div>
            </div>
            <div className="col-6 d-flex align-items-center">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Subscripe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer></footer>
      <footer className="footer-bottom py-3">
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()}; Ardial
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
