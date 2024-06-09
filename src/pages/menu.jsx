import { Col, Row } from "antd";
import React from "react";
import Search from "../components/menu/Search";
import "../assets/css/menu.css";
import ListProduct from "../components/menu/ListProduct";
import ListSponsor from "../components/menu/ListSponsor";

const Menu = () => {
  return (
    <Row>
      <Col span={24}>
        <div class="container-fluid home-hero" style={{ width: "100%" }}>
          <div class="container-fluid hero-title">
            <h1 className="title-h1">Our Menu</h1>
            <p className="title-p">
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </p>
            <div id="hero-button"></div>
            <div className="search">
                <Search />
            </div>
          </div>
        </div>
        <div>
          <ListProduct></ListProduct>
        </div>
        <div style={{backgroundColor:'#F9F9F7'}}>
          <ListSponsor></ListSponsor>
      </div>
      </Col>
      
    </Row>
    
  );

};

export default Menu;
