import * as React from "react";
import Subheader from "../common/Subheader/subheader";
import "./footer.css";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <Subheader className="footer__body">Ik | {year}</Subheader>
    </div>
  )
}

export default Footer;