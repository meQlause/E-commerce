import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Contact from "./../pages/Contact";
const Header = () => {
  return (
    <div>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 text-white mb-0">
              <p>Free Shipping Over $100 &Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :{" "}
                <a className="text-white" href="tel:+821075892207">
                  +82 1075892207
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link className="text-white">Dev Corner</Link>
              </h3>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text py-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center text-white gap-10">
                    <img src="images/compare.svg" alt="" />
                    <p>
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-10">
                    <img src="images/wishlist.svg" alt="" />
                    <p>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-10">
                    <img src="images/user.svg" alt="" />
                    <p>
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-10">
                    <img src="images/" alt="" />
                    <p></p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-10">
                    <img src="images/cart.svg" alt="" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p>500$</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center">
                <div></div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
