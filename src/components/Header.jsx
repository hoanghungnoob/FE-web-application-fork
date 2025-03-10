import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/header.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Social from "./social";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import useAuthService from "../api/auth.js";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const { getLogout } = useAuthService();
  const navigate = useNavigate();

  useEffect(() => {
    const account = sessionStorage.getItem("account");
    if (account) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const handleLogout = async () => {
    const logout = await getLogout();
    if (logout) {
      // Xóa thông tin đăng nhập từ sessionStorage
      navigate("/login");
    }
  };

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
            <g clip-path="url(#clip0_23_1637)">
              <path
                d="M48.1694 0.80383C47.8608 0.625798 47.493 0.575068 47.1464 0.662739C46.7999 0.750411 46.5028 0.969345 46.3202 1.27163L36.6488 17.3631C36.5992 17.4465 36.5592 17.5351 36.5294 17.6272C35.4473 18.0212 34.4373 18.5848 33.5386 19.2959C30.6082 14.4064 25.2389 11.3276 19.3731 11.3276C10.322 11.3276 2.95955 18.5483 2.93432 27.4317H0.800781L0.99155 28.9239C2.1017 37.597 7.54786 45.1725 15.3786 49.1615V54.2826H35.5842C38.1454 54.2826 40.2291 52.2343 40.2291 49.7182V49.1621C48.0623 45.1713 53.506 37.5958 54.6186 28.9239L54.8094 27.4305H50.9565C50.9386 22.8963 47.978 19.0415 43.8599 17.5861L55.9263 6.18174C56.4629 5.67465 56.4802 4.83454 55.962 4.30751C55.8392 4.18203 55.6925 4.08154 55.5302 4.01178C55.3678 3.94202 55.1931 3.90435 55.0159 3.90092C54.8388 3.8975 54.6627 3.92839 54.4977 3.99183C54.3327 4.05526 54.182 4.15001 54.0543 4.27064L40.6131 16.9762C40.4925 16.9714 40.3725 16.9581 40.25 16.9581C40.1725 16.9581 40.098 16.969 40.0217 16.9702L48.6457 2.62004C48.7359 2.47007 48.7951 2.30413 48.8199 2.13169C48.8448 1.95925 48.8348 1.78369 48.7906 1.61504C48.7464 1.44638 48.6687 1.28794 48.5621 1.14875C48.4556 1.00956 48.3221 0.892356 48.1694 0.80383ZM19.3725 13.9803C24.5399 13.9803 29.25 16.8372 31.5928 21.3134C30.7387 22.4671 30.1331 23.7798 29.8131 25.1712C28.7392 20.4763 24.4697 16.9569 19.3725 16.9569C13.4851 16.9569 8.69555 21.6519 8.67032 27.4311H5.63524C5.65986 20.0109 11.8112 13.9803 19.3725 13.9803ZM19.3725 22.5935C16.6463 22.5935 14.4279 24.7603 14.4026 27.4311H11.3719C11.3971 23.1145 14.9743 19.6102 19.3725 19.6102C23.7719 19.6102 27.3528 23.1145 27.3756 27.4311H24.3411C24.3171 24.7603 22.0986 22.5935 19.3725 22.5935ZM21.6383 27.4317H17.1066C17.1187 26.8487 17.3627 26.2934 17.7865 25.885C18.2102 25.4765 18.78 25.2472 19.3737 25.2462C19.9672 25.2473 20.5366 25.4768 20.9599 25.8853C21.3832 26.2938 21.6267 26.8489 21.6383 27.4317ZM51.6974 30.0844C50.1965 37.7928 44.874 44.3644 37.4974 47.5121H33.1743V50.1654H37.4685C37.3674 50.5817 37.1266 50.9525 36.7849 51.2182C36.4433 51.4838 36.0205 51.6288 35.5848 51.6299H18.0802V50.1654H23.1442V47.5121H18.1128C10.7362 44.3663 5.41309 37.7928 3.91094 30.0844H51.6974ZM37.9848 27.4317C37.9967 26.8489 38.2404 26.2939 38.6638 25.8854C39.0872 25.4769 39.6565 25.2475 40.25 25.2462C40.844 25.2467 41.4142 25.4758 41.8382 25.8844C42.2623 26.2929 42.5064 26.8484 42.5183 27.4317H37.9848ZM40.25 19.6108C44.6512 19.6108 48.2334 23.1151 48.2568 27.4317H45.2205C45.1959 24.7609 42.9768 22.5941 40.25 22.5941C37.5239 22.5941 35.3072 24.7609 35.2826 27.4317H32.2494C32.274 23.1151 35.8512 19.6108 40.25 19.6108Z"
                fill="#AD343E"
              />
              <path
                d="M39.6741 42.9139C39.8901 42.9139 40.1086 42.8637 40.3098 42.7568C41.9591 41.8897 43.4065 40.6947 44.5598 39.248C45.7131 37.8012 46.5469 36.1345 47.0082 34.3539C47.0524 34.1848 47.0622 34.0088 47.037 33.8361C47.0118 33.6633 46.9522 33.4971 46.8614 33.347C46.7707 33.1969 46.6507 33.0659 46.5083 32.9615C46.3659 32.8571 46.2039 32.7813 46.0316 32.7385C45.8593 32.6957 45.6801 32.6867 45.5043 32.7121C45.3285 32.7374 45.1595 32.7967 45.007 32.8863C44.8545 32.976 44.7215 33.0943 44.6157 33.2346C44.5099 33.3748 44.4334 33.5342 44.3904 33.7035C44.0221 35.1266 43.356 36.4588 42.4345 37.6151C41.5131 38.7714 40.3565 39.7265 39.0384 40.4196C38.7726 40.5585 38.5618 40.7808 38.4395 41.051C38.3172 41.3213 38.2905 41.6239 38.3636 41.9108C38.4367 42.1976 38.6054 42.4522 38.8429 42.634C39.0804 42.8158 39.373 42.9143 39.6741 42.9139Z"
                fill="#474747"
              />
              <path
                d="M36.4059 45.0064C37.2903 45.0064 38.0072 44.3023 38.0072 43.4337C38.0072 42.5652 37.2903 41.8611 36.4059 41.8611C35.5216 41.8611 34.8047 42.5652 34.8047 43.4337C34.8047 44.3023 35.5216 45.0064 36.4059 45.0064Z"
                fill="#474747"
              />
            </g>
            <defs>
              <clipPath id="clip0_23_1637">
                <rect
                  width="56"
                  height="55"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <h2 className="logo-title-header">Yummy Food</h2>
        </div>
        <div className="headerCenter">
          <ul className="headerList">
            <li>
              <NavLink to="/home" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeClassName="active" exact>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" exact>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="headerRight">
          {isLoggedIn ? (
            <>
              <div className="shopping-cart">
                <Link to="/cart">
                  <ShoppingCartIcon
                    style={{ fontSize: 30, color: "#AD343E" }}
                  />
                </Link>
              </div>
              <div className="avatar-user dropdown">
                <Avatar
                  alt="User Avatar"
                  src="/path/to/avatar.jpg"
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                <li>
                <Link to="/favorite" className="dropdown-item">
                  Favorite
                </Link>
                  </li>
                  <br/>
                  <li>
                <Link to="/history" className="dropdown-item">
                  Order
                </Link>
                  </li>
                  <br/>
                  <li>
                    <p className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </p>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
