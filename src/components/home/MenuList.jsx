import React from "react";
import {  Row } from "antd";
import iconmenubreakfast from "../../assets/images/iconmenubreakfast.png";
import iconmenumaindish from "../../assets/images/iconmenumaindish.png";
import iconmenudrinks from "../../assets/images/iconmenudrinks.png";
import iconmenudesserts from "../../assets/images/iconmenudesserts.png";
import MenuItem from "../menu/MenuItem";
import "../../assets/css/menuList.css";
import Title from "./Title";
function MenuList() {
  const menuArr = [
    {
      image: iconmenubreakfast,
      titleImage: "iconmenubreakfast.png",
      titleMenu: "Breakfast",
      description: "In the new era of technology we look in the future with certainty and pride for our life.",
      url: "user/menu"
    },
    {
      image: iconmenumaindish,
      titleImage: "iconmenumaindish.png",
      titleMenu: "Main Dishes",
      description: "In the new era of technology we look in the future with certainty and pride for our life.",
      url: "user/menu"
    },
    {
      image: iconmenudrinks,
      titleImage: "Drinks.png",
      titleMenu: "Breakfast",
      description: "In the new era of technology we look in the future with certainty and pride for our life.",
      url: "user/menu"
    },
    {
      image: iconmenudesserts,
      titleImage: "iconmenudesserts.png",
      titleMenu: "Desserts",
      description: "In the new era of technology we look in the future with certainty and pride for our life.",
      url: "user/menu"
    },
  ]
  return (
    <Row className="container-fluid">
      <div className="d-flex flex-row justify-content-center" >
        <Title title = "Browse Our Menu"/>
      </div>
      <div className="container d-flex flex-row justify-content-between gap-2" >
        {menuArr.map((menu, index) => {
          return(
          <MenuItem 
          key={index}
          image={menu.image} 
          titleImage={menu.titleImage}
          titleMenu={menu.titleMenu}
          description={menu.description}
          url={menu.url}
          />
          )
        })}
      </div>
    </Row>
  );
}
export default MenuList;
