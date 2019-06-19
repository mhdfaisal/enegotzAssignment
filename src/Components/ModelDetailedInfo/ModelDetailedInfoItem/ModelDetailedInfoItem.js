import React from "react";

const renderInfoColumns = ({ name, value }) => {
  return (
    <div className="row py-3" style={{ borderBottom: "2px solid #d8d8d8" }}>
      <div className="col-md-6">
        <h6>{name.toUpperCase()}</h6>
      </div>
      <div className="col-md-6">{value}</div>
    </div>
  );
};

const ModelDetailedInfoItem = props => {
  return <div>{renderInfoColumns(props.item)}</div>;
};

export default ModelDetailedInfoItem;
