import React from 'react';

// Define a functional component for the individual item
const Item = ({ icon, title, description }) => {
  return (
    <div className="itemAB">
      <p>{icon}</p>
      <div className="item-content">
        <p id="large-item-content">{title}</p>
        <p id="small-item-content">{description}</p>
      </div>
    </div>
  );
};

// Define a functional component for the entire item-about section
const ItemAbout = () => {
  // Define the data for the individual items
  const items = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#FFB800" />
          <path d="M32 16H16V32H32V16Z" fill="white" />
          <path d="M24 20C22.8954 20 22 20.8954 22 22C22 23.1046 22.8954 24 24 24C25.1046 24 26 23.1046 26 22C26 20.8954 25.1046 20 24 20Z" fill="#FFB800" />
          <path d="M24 28C22.8954 28 22 28.8954 22 30C22 31.1046 22.8954 32 24 32C25.1046 32 26 31.1046 26 30C26 28.8954 25.1046 28 24 28Z" fill="#FFB800" />
        </svg>
      ),
      title: 'Multi Cuisine',
      description: 'In the new era of technology we look in the future with certainty life.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#00C48C" />
          <path d="M16 16H32V32H16V16Z" fill="white" />
          <path d="M24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22Z" fill="#00C48C" />
          <path d="M24 30C22.8954 30 22 30.8954 22 32C22 33.1046 22.8954 34 24 34C25.1046 34 26 33.1046 26 32C26 30.8954 25.1046 30 24 30Z" fill="#00C48C" />
        </svg>
      ),
      title: 'Easy To Order',
      description: 'In the new era of technology we look in the future with certainty life.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#FF5B5B" />
          <path d="M16 16H32V32H16V16Z" fill="white" />
          <path d="M24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22Z" fill="#FF5B5B" />
          <path d="M24 30C22.8954 30 22 30.8954 22 32C22 33.1046 22.8954 34 24 34C25.1046 34 26 33.1046 26 32C26 30.8954 25.1046 30 24 30Z" fill="#FF5B5B" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'In the new era of technology we look in the future with certainty life.',
    },
  ];

  return (
    <div className="item-about">
      {items.map((item, index) => (
        <Item
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ItemAbout;