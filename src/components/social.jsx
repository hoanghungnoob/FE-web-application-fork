import { Link} from 'react-router-dom';
import '../assets/css/social.css';
function Social() {
  return (
    <div className="header-top-right">
     <Link to="/today">
        <div className="header-top-right-bg $color">
          <i className="fa-brands fa-twitter" aria-hidden="true"></i>
        </div>
      </Link>
     <Link to="/today"> 
        <div className="header-top-right-bg $color">
          <i className="fa-brands fa-facebook" aria-hidden="true"></i>
        </div>
      </Link>
     <Link to="/today">
        <div className="header-top-right-bg $color">
          <i className="fa-brands fa-instagram" aria-hidden="true"></i>
        </div>
      </Link>
     <Link to="/today">
        <div className="header-top-right-bg $color ">
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </div>
      </Link> 
    </div>
  );
}
export default Social;