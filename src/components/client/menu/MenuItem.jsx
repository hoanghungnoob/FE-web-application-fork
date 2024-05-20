import React from "react";
import {ExploreMenu} from '../button/Button.stories';
import { Link } from "react-router-dom";
function MenuItem(props) {
    const {image, titleImage, titleMenu, description, url} = props
  return (
    <div className="menu-card col-3 menu-card-item">
        <img src={image} alt={titleImage} />
      <h3>{titleMenu}</h3>
      <p>
        {description}
      </p>
      <Link to={url}><ExploreMenu/></Link>
    </div>
  );
}
export default MenuItem;