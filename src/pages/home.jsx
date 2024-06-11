import { Col, Row } from 'antd';
import MenuList from '../components/home/MenuList';
import ComeAndVisit from "../components/home/Contact";
import Event from "../components/home/Event";
import Feedback from "../components/home/Feedback";
import ListComment from '../components/home/ListComment';
import contactImage from '../assets/images/contactImage.jpg';
import Blog from '../components/home/Blog';
import "../assets/css/home.css";
const User = () => {
  return (
        <Row>
        <Col span={24}>
        <div class="container-fluid home-hero" style={{width:"100%", }}>
        <div class="container-fluid hero-title" id="hero">
            <h1 className='title-h1'>Best food for your taste</h1>
            <p className='title-p'>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div id="hero-button">
            </div>
        </div>
        </div>
                <MenuList></MenuList>
                <ComeAndVisit image={contactImage} isContactPage={true} />
                <Event/>
                <Feedback />
                <ListComment/>
                <Blog />
        </Col>
        </Row>

  );
};
export default User;
