import {Route, Link, NavLink} from 'react-router-dom';
import '../../assets/css/social.css';
function Social() {
  return (
    <div className="header-top-right">
     <Link to="/today"/> <a href="#">
        <div className="header-top-right-bg $color">
          <i className="fa-brands fa-twitter" aria-hidden="true"></i>
        </div>
      </a>
     <Link to="/today"/> <a href="#">
        <div className="header-top-right-bg $color">
          <i className="fa-brands fa-facebook" aria-hidden="true"></i>
        </div>
      </a>
     <Link to="/today"/> <a href="#">
        <div className="header-top-right-bg $color">
          <i className="fa-brands fa-instagram" aria-hidden="true"></i>
        </div>
      </a>
     <Link to="/today"/> <a href="#">
        <div className="header-top-right-bg $color ">
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </div>
      </a>
    </div>
  );
}
export default Social;