import React from "react";
import "../styles/itemDetails.css";
import moment from "moment";

const ItemDetails = ({ ad }) => {
  const time = moment(ad.createdAt).fromNow();

  return (
    <div className="details_container">
      <h4 className="title">Details</h4>
      <div className="items">
        <div className="item">
          <p className="attribute">Brand</p>
          <p className="value">{ad.brand}</p>
        </div>
        <div className="item">
          <p className="attribute">Product</p>
          <p className="value">{ad.title}</p>
        </div>
        <div className="item">
          <p className="attribute">Price</p>
          <p className="value">Rs. {ad.price}</p>
        </div>
        <div className="item">
          <p className="attribute">Condition</p>
          <p className="value">{ad.condition}</p>
        </div>
        <div className="item">
          <p className="attribute">Last Updated at</p>
          <p className="value">{time}</p>
        </div>
      </div>

      <hr />

      <div className="description_contianer">
        <h4 className="title">Description</h4>
        <p className="description">{ad.description}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
