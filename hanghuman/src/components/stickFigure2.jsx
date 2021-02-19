import React from "react";
import "./stickFigure2.css";

const stickFigure2 = () => {
  let style = true;
  return (
    <div className="wrapper">
      <div className="pole"></div>
      <div className="noose"></div>
      <div className="bottom"></div>
      <div className="head" style={{ visibility: { style } }}></div>
      <div className="eye" style={{ visibility: { style } }}></div>
      <div className="eyeRight" style={{ visibility: { style } }}></div>
      <div className="arc" style={{ visibility: { style } }}></div>
      <div className="torso" style={{ visibility: { style } }}></div>
      <div className="leftarm" style={{ visibility: { style } }}></div>
      <div className="rightarmupper" style={{ visibility: { style } }}></div>
      <div className="rightarm" style={{ visibility: { style } }}></div>
      <div className="leftleg" style={{ visibility: { style } }}></div>
      <div className="leftfoot" style={{ visibility: { style } }}></div>
      <div className="rightleg" style={{ visibility: { style } }}></div>
      <div className="rightfoot" style={{ visibility: { style } }}></div>
    </div>
  );
};

export default stickFigure2;
