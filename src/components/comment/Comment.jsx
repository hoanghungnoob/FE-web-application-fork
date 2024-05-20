import React from "react";
import "./Comment.css";
// import { comment } from "postcss";
function Comment({title, content,...profile}) {
  return (
      <div>
        <div className="comment">
          <div className="title-comment">
            <p>{title}</p>
          </div>
          <div className="content-comment">
            <p>{content}</p>
          </div>
          <hr className="hr-comment" />
          <div className="profile-comment">
            <div className="profile">
              <img src={profile.avatar} alt="" />
            </div>
            <div className="user-address">
              <div className="user-comment">{profile.userName}</div>
              <div className="address-comment">{profile.address}</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Comment;