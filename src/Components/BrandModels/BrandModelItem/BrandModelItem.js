import React from "react";
import { Link } from "react-router-dom";

const BrandModelItem = ({ model, index }) => {
  const { aspiration, body_style, fuel_type, price, make } = model;
  return (
    <div
      className="row my-4 py-2"
      style={{ borderBottom: "1px solid #d8d8d8" }}
    >
      <div className="col-sm-2">{index + 1}</div>
      <div className="col-sm-2">{aspiration}</div>
      <div className="col-sm-2">{body_style}</div>
      <div className="col-sm-2">{fuel_type}</div>
      <div className="col-sm-2">{price}</div>
      <div className="col-sm-2">
        <Link to={`/details/${make}/${index + 1}`}>Know more</Link>
      </div>
    </div>
  );
};

export default BrandModelItem;
