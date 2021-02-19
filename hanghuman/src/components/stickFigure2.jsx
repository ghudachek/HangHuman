import React from "react";
//import "./stickFigure2.css";

const StickFigure2 = (props) => {
  console.log(props.incorrect);

  return (
    <div className="wrapper">
      <div className="pole"></div>
      <div className="noose"></div>
      <div className="bottom"></div>
      {props.incorrect >= 1 ? (
        <div className="head" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="head" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 2 ? (
        <div className="eye" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="eye" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 2 ? (
        <div className="eyeRight" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="eyeRight" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 2 ? (
        <div className="arc" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="arc" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 3 ? (
        <div className="torso" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="torso" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 5 ? (
        <div className="rightarmupper" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="rightarmupper" style={{ visibility: "hidden" }}></div>
      )}
      {props.incorrect >= 6 ? (
        <div className="leftarm" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="leftarm" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 8 ? (
        <div className="rightarm" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="rightarm" style={{ visibility: "hidden" }}></div>
      )}
      {props.incorrect >= 7 ? (
        <div className="leftleg" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="leftleg" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 9 ? (
        <div className="rightleg" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="rightleg" style={{ visibility: "hidden" }}></div>
      )}
    </div>
  );
};

export default StickFigure2;
