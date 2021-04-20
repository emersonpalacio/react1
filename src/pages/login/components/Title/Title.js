import React from "react";
import "./Title.css";

const Title = (props) => {
  const { text } = props;
  return <div className="title-container">{text}</div>;
};
export default Title;
