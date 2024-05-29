import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import NavLink và useLocation
import "../assets/css/header.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Social from "./social";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // Lấy đường dẫn hiện tại

  useEffect(() => {
    // Cập nhật trạng thái isLoggedIn từ sessionStorage
    const account = sessionStorage.getItem('account');
    if(account){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]); // Theo dõi sự thay đổi của đường dẫn

  return (
    <div className="header">
      <div className="headerContact">
        <div className="contactLeft">
          <div className="phone">
            <LocalPhoneOutlinedIcon />
            0123455644
          </div>
          <div className="email">
            <EmailOutlinedIcon />
            yummyrestaurant@yahoo.com
          </div>
        </div>
        <div className="contactRight">
          <Social />
        </div>
      </div>
      <div className="headerTop">
        <div className="headerLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="55"
            viewBox="0 0 57 55"
            fill=""
          >
            {/* Phần SVG đã được giữ nguyên */}
          </svg>
          <h2 className="logo-title-header">Yummy Food</h2>
        </div>
        <div className="headerCenter">
          <ul className="headerList">
            <li>
              <NavLink
                to="/home"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                exact
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                activeClassName="active"
                exact
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                exact
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="headerRight">
          {isLoggedIn ? (
          <>
            <div className="shopping-cart">
              <NavLink to="/cart">
                <ShoppingCartIcon  style={{ fontSize: 30, color: '#AD343E' }} />
              </NavLink>
            </div>
            <div className="avatar-user">
              <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
            </div>
          </>
          ) : (
          <Link to="/login"><button>Login</button></Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
