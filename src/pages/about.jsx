import ComeAndVisit from "../components/home/Contact";
import aboutImage from '../assets/images/aboutImage.png';
import '../assets/css/clients/about.css';
import ItemAbout from '../components/about/ItemAbout.jsx';
import InformationSection from '../components/about/InformationSection.jsx';
import ListComment from '../components/home/ListComment';
import VideoAbout from '../assets/images/VideoAbout.mp4'

function App() {
  const information = {
    title: 'A little information for our valuable guest',
    text:
      'At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.',
  };

  const cards = {
    locations: { value: '3', label: 'Locations' },
    founded: { value: '1995', label: 'Founded' },
    staffMembers: { value: '65+', label: 'Staff Members' },
    satisfiedCustomers: { value: '100%', label: 'Satisfied Customers' },
  };
  return (
    <div>
      <ComeAndVisit image={aboutImage} title="About Us" isContactPage={false} />
      <div className="video-container">
        <video className="about-video" autoPlay loop muted>
          <source src={VideoAbout} type="video/mp4" />
        </video>
        <ItemAbout />
      </div>
      <InformationSection information={information} cards={cards} />
      <ListComment/>
    </div>
  );
}
export default App;