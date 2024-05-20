import contactImage from '../../assets/images/contactImage.jpg';
import { Link } from "react-router-dom";
import { MoreAboutUs } from '../button/Button.stories'
import Title from "../home/Title";
function ComeAndVisit (){
    const contactContent = {
        position: "absolute",
        bottom: "-90px",
        right: "-100px",
        width: "390px",
        height: "250px",
        flexShrink: "250px",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        borderRadius: "12px",
        background: "#474747"
    };
    const containerImage = {
        position : "relative",
        marginTop: "30px",
    };
    const contactImagestyle =  {
        height: "566px",
        borderRadius : "12px",
    };
    const styleButtonAboutUs = {
        display: "flex",
        alignTtems : "center",
        justifyContent: "start",

    }
    return (
        <div className="container-fluid bg-1" id="bg" style={{height : '700px', backgroundColor: "#F9F9F7"}}>
            <div className="container d-md-flex align-items-center pt-5" id="bg-item">
                <div className="row justify-content-center align-items-center margin-center" style={{width: '100%'}}>
                    <div className="col-md-6">
                        <div className="container-image" style={containerImage}>
                            <img src={contactImage} alt="" id="contact-image" style={contactImagestyle} />
                            <div className="contact-content" style={contactContent}>
                                <h6 style={{fontWeight: "600", fontSize:"24px"} }>Come and visit us</h6>
                                <div className="content">
                                        <div className="content-item d-flex mt-3">                                           
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p style={{marginLeft:"30px", marginTop:"2px"}}>
                                            (414) 857 - 0107
                                            </p>
                                        </div>
                                        <div className="content-item d-flex mt-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p style={{marginLeft:"30px", marginTop:"2px"}}>
                                                <a href="mailto:happytummy@restaurant.com" 
                                                    style={{
                                                            color: 'var(--Neutral-02, #F9F9F7)', 
                                                            fontFamily: 'DM Sans, sans-serif', 
                                                            fontSize: '16px' , fontStyle: 'normal' , 
                                                            fontWeight: '400',lineHeight:'24px', 
                                                            marginTop:'15px'
                                                        }}>
                                                </a>
                                                happytummy@restaurant.com
                                            </p>                        
                                        </div>
                                        <div className="content-item d-flex mt-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path
                                                    d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p style={{marginLeft:"30px", marginTop:"2px"}}>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 pt-5">
                        <Title title = "We provide healthy food for your family." />
                        <p style={{fontFamily:"DM Sans", lineHeight: "25px"}}>
                            We provide healthy food for your family.", "Our story began with a vision to create a unique dining experience
                            that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our 
                            local roots while infusing a global palate.
                        </p>
                        <p style={{fontFamily:"DM Sans", lineHeight: "20px", color: "#414536"}}>
                        At place, we believe that dining is not just about food, but also about the overall experience. 
                        Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                        </p>
                        <div style={styleButtonAboutUs}>
                           <Link to="/user/aboutus"> <MoreAboutUs /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ComeAndVisit;