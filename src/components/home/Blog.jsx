import React from "react";
import Title from "./Title";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import blog4 from "../../assets/images/blog4.png";
import blog5 from "../../assets/images/blog5.png";
import "../../assets/css/clients/blog.css";
import CardBlog from "../card/CardBlog";
import { ReadAllArticles } from "../button/Button.stories";
import { data } from "autoprefixer";
function Blog() {
  return (
    <div className="container-blog pt-5">
      <div className="flex justify-around">
        <Title title="Our Blog & Articles" />
        <ReadAllArticles />
      </div>
      <div className="container pt-5">
        <div class="grid-container">
        {blogList.map((blog)=>{
          return (
            <CardBlog
              area={blog.area}
              styleCard={blog.styleCard}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
        />
          )
        })}
      </div> 
      </div>
    </div>
  );
}
const blogList = [
  {
    area: "item1",
    styleCard : "card-larger",
    image: blog1,
    date: "January 3, 2023",
    title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    description:"We consider all the drivers of change gives you the components you need to change to create a truly happens.",
  },
  {
    area: "item2",
    styleCard : "card-body",
    image: blog2,
    date: "January 3, 2023",
    title:"How to prepare the perfect french fries in an air fryer",
    description:"",
  },
  {
    area: "item3",
    styleCard : "card-body",
    image: blog3,
    date: "January 3, 2023",
    title:"How to prepare delicious chicken tenders",
    description:"",
  },
  {
    area: "item4",
    styleCard : "card-body",
    image: blog4,
    date: "January 3, 2023",
    title: "7 delicious cheesecake recipes you can prepare",
    description:"",
  },
  {
    area: "item5",
    styleCard : "card-body",
    image: blog5,
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city",
    description:"",
  },
];
export default Blog;
