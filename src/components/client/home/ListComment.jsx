import Title from "./Title";
import Comment from "../comment/Comment";
function ListComment() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <Title title="What Our Customers Say" />
      </div>
      <div className="container flex justify-around pt-5">
            {commentArr.map((comment, index)=> {
              return (
                <Comment 
                key={index}
                title={comment.title} 
                content={comment.content}
                avatar={comment.profile.avatar}
                userName={comment.profile.userName}
                address={comment.profile.address}
                />
              )
            })}
      </div>
    </div>
  );
}
const commentArr = [
  {
      title:  "“The best restaurant”",
      content : "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      profile: {
          userName: "Laurea",
          avatar : "https://i.imgur.com/k05L1oA.jpg",
          address :  "Sophire Robson",
      }
  },
  {
      title:    "“Simply delicious”",
      content :"The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      profile: {
          userName: "Sofia",
          avatar : "https://matkinhtitan.com/wp-content/uploads/2020/06/kinh-can-mat-tron-nam-ha-noi.jpeg",
          address :   "Andy Smith",
      }
  },
  {
      title:   "“One of a kind restaurant”",
      content : "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      profile: {
          userName: "John",
          avatar : "https://i.imgur.com/k05L1oA.jpg",
          address :   "Matt Cannon",
      }
  },
]
export default ListComment;
