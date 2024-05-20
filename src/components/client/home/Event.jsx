import Title from "./Title";
import birthday from '../../../assets/images/birthday.jpg';
import event from '../../../assets/images/event.jpg';
import wedding from '../../../assets/images/wedding.jpg';
import catering from '../../../assets/images/catering.jpg';
import CardItem from "../card/Card";
const styleListCart = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px"
}

function Event() {
  return (
    <div className="container" style={{marginTop: "100px"}} id="bg">
      <div className="container-fluid bg-white pt-5" id="bg">
        <Title title="We provide healthy food for your family." />
        <div style={styleListCart}>
          {eventList.map((event, index) => {
            return (
              <CardItem 
              key={index}
              image={event.image} 
              title={event.title} 
              description={event.description} 
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
const eventList = [
  {
    image : catering,
    title: "Caterings",
    description:
      "In the new era of technology we look in the future with certainty for life.",
  },
  {
    image : birthday,
    title: "Birthdays",
    description:
      "In the new era of technology we look in the future with certainty for life.",
  },
  {
    image : wedding,
    title: "Weddings",
    description:
      "In the new era of technology we look in the future with certainty for life.",
  },
  {
    image : event,
    title: "Events",
    description:
      "In the new era of technology we look in the future with certainty for life.",
  },
];
export default Event;
