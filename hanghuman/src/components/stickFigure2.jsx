import React from "react";
import "./stickFigure2.css";
import cloud from "./cloud-outline.png";

const stickFigure2 = () => {
  //<i className="fas fa-umbrella"></i>
  return (
    <div className="wrapper">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
        crossOrigin="anonymous"
      ></link>
      <div className="pole"></div>
      <rect className="noose"></rect>
      <div className="bottom"></div>
      <div className="head"></div>
      <div className="eye"></div>
      <div className="eyeRight"></div>
      <div className="arc"></div>
      <div className="torso"></div>
      <div className="leftarm"></div>
      <div className="rightarmupper"></div>
      <div className="rightarm"></div>
      <div className="leftleg"></div>
      <div className="leftfoot"></div>
      <div className="rightleg"></div>
      <div className="rightfoot"></div>
    </div>
  );
};

export default stickFigure2;
