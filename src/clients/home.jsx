import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import  Header from "../components/client/Header";
import Footer from '../components/client/Footer';
import MenuList from '../components/client/home/MenuList';
import ComeAndVisit from "../components/client/home/Contact";
import Event from "../components/client/home/Event";
import Feedback from "../components/client/home/Feedback";
import ListComment from '../components/client/home/ListComment';
import Blog from '../components/client/home/Blog';
import {ExploreMenu} from "../components/client/button/Button.stories";
import "../assets/css/home.css";
const User = () => {
  return (
        <Row>
        <Col span={24}>
        <Header />
        <div class="container-fluid home-hero" style={{width:"100%", }}>
        <div class="container-fluid hero-title" id="hero">
            <h1 className='title-h1'>Best food for your taste</h1>
            <p className='title-p'>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div id="hero-button">
            </div>
        </div>
        </div>
                <MenuList></MenuList>
                <ComeAndVisit/>
                <Event/>
                <Feedback />
                <ListComment/>
                <Blog />
        <Footer />
        </Col>
        </Row>

  );
};
export default User;
