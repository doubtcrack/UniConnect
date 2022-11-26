import React from "react";
import "../styles/itemDetails.css";
const ItemDetails = ({ ad }) => {
  return (
    <div className="details_container">
      <h4 className="title">Details</h4>
      <div className="items">
        <div className="item">
          <p className="attribute">Brand</p>
          <p className="value">A.K Jha</p>
        </div>
        <div className="item">
          <p className="attribute">Price</p>
          <p className="value">Rs 450</p>
        </div>
        <div className="item">
          <p className="attribute">Condition</p>
          <p className="value">Used</p>
        </div>
      </div>

      <hr />

      <div className="description_contianer">
        <h4 className="title">Description</h4>
        <p className="description">
          This book is meant to serve as a textbook of Physics for the
          undergraduate students of science and engineering. Exhausted treatment
          of topics in quantum mechanics, statistical mechanics, nuclear
          physics, electromagnetic theory, X-rays production, properties and
          applications and ultrasonics and accoustics of buildings have been
          presented. These topics have been presented in easy to understand and
          simple language. Large number of solved numericals have been included
          to give a quantitative idea of the subject. Short and long answer type
          questions and unsolved numericals have been given at the end of each
          chapter for practice.
        </p>
      </div>
    </div>
  );
};

export default ItemDetails;
