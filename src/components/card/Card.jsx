import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const CardItem = ({ date, title, description, image }) => (
  <Card
    hoverable
    style={{
      width: "80%",
    }}
    cover={<img alt="example" src={image} style={{ height: "300px" }} />}
  >
    <Meta date={date} title={title} description={description} />
  </Card>
);

export default CardItem;
