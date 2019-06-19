import React from "react";

const renderBackBtn = (URL, text, onBackBtnClick) => {
  return (
    <button className="btn btn-primary" onClick={onBackBtnClick}>
      <i className="fa fa-arrow-left mr-2" />
      {text}
    </button>
  );
};

const BackBtn = ({ URL, text, onBackBtnClick }) => {
  return <>{renderBackBtn(URL, text, onBackBtnClick)}</>;
};

export default BackBtn;
