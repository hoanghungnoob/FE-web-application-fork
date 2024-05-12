import React from "react";
import "../../assets/css/footer.css";
import photo1 from "../../assets/images/photo1.png";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";
import photo4 from "../../assets/images/photo4.png";
import {Route, Link, NavLink} from 'react-router-dom';
import { Logo } from "./Logo";
import Social from "./social";
function Footer() {
  console.log(imagesFooterArr);
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="row">
          <div className="col-4 footer-logo">
            <Logo/>
            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
            <Social />
          </div>
          <div className="col-3">
            <div className="row footer-pages">
              <div className="col-2">
                <p className="footer-pages-title1">
                  <strong>Pages</strong>
                  <nav>
                        <ul className="menu2">
                        {pageArr.map((page)=>
                          <li>
                            <NavLink to={page.url} activeClassName='active'>{page.page}</NavLink>
                          </li>
                        )}
                        </ul>
                  </nav>
                </p>
              </div>
              <div className="col-6">
                <p className="footer-pages-title2">
                  <strong>Utility Pages</strong>
                  <nav>
                        <ul className="menu2">
                        {utilityPagesArr.map((page)=>
                          <li>
                          <NavLink to="#" activeClassName='active'>{page}</NavLink>
                          </li>
                        )}
                        </ul>
                  </nav>
                </p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <p className="footer-pages-title3">
              <strong>Follow Us On Instagram</strong>
            </p>
            <div className="row">
              {imagesFooterArr.map((image) => (
                <div className="col-md-5">
                  <img className="footer-image"  src={image} alt="img"></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line">
        <hr ></hr>
      </div>
      <div classNameName="footer-copyright">
        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </div>
  );
}

const imagesFooterArr = [photo1, photo2, photo3, photo4];
const pageArr = [
  {
    page :  "Home",
    url: "/"
  }, 
  {
    page :  "About",
    url: "/user/about"
  }, 
  {
    page : "Menu",
    url: "/user/menu"
  }, 
  {
    page : "Pricing",
    url: "#"
  }, 
  {
    page :  "Blog",
    url: "#"
  }, 
  {
    page :  "Contact",
    url: "#"
  }, 
  {
    page : "Delivery",
    url: "#"
  }, 
];
const utilityPagesArr = [
    'Start here',
    'Style guide',
    'Password Protected',
    '404 Not Found',
    'Licenses',
    'Changelog',
    'View More'
]
export default Footer;
