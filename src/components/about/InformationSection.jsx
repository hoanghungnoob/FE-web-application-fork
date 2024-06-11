// InformationSection.js
import React from 'react';

const InformationSection = ({ information, cards }) => {
  return (
    <div className="container-fluid p-5 bg-1">
      <div className="container">
        <div className="row">
          <div className="col-6" id="information">
            <h2>{information.title}</h2>
            <p>{information.text}</p>
            <div className="card-number">
              <div className="sum-card">
                {Object.values(cards).slice(0, 2).map((card, index) => (
                  <div
                    key={index}
                    className="cardAB d-inline-flex flex-column justify-content-center align-items-center gap-3"
                  >
                    <h2>{card.value}</h2>
                    <p>{card.label}</p>
                  </div>
                ))}
              </div>
              <div className="sum-card">
                {Object.values(cards).slice(2, 4).map((card, index) => (
                  <div
                    key={index}
                    className="cardAB d-inline-flex flex-column justify-content-center align-items-center gap-3"
                  >
                    <h2>{card.value}</h2>
                    <p>{card.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="information-right">
              <img src="https://studiovietnam.com/wp-content/uploads/2022/03/hinh-anh-ve-do-an-20.jpg" alt='image_information' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;