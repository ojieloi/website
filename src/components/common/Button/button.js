import * as React from "react";
import Body from "../Body/body";
import "./button.css";

const Button = ({ url, target, label }) => {
  const openLink = () => {
    try {
      if (url && target) {
        window.open(url, target);
      } else {
        throw new Error("Missing URL or Target");
      }
    } catch (err) {
      console.error("Unable to open link.", err);
    }
  };
  return (
    <button className="button__wrapper" type="button" onClick={openLink}>
      <Body className="button__label">{label}</Body>
    </button>
  );
};

export default Button;
