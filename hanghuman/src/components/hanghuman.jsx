import React from "react";
import "./hang-human.css";

const HangHuman = (props) => {
  return (
    <div className="game-human">
      <div className="pole"></div>
      <div className="noose"></div>
      <div className="bottom"></div>
      {props.incorrect >= 1 ? (
        <div className="H-head" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-head" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 9 ? (
        <div className="H-eye" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-eye" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 8 ? (
        <div className="H-eyeRight" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-eyeRight" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 7 ? (
        <div className="H-arc" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-arc" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 2 ? (
        <div className="H-torso" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-torso" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 3 ? (
        <div className="H-leftarm" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-leftarm" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 4 ? (
        <div className="H-rightarm" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-rightarm" style={{ visibility: "hidden" }}></div>
      )}
      {props.incorrect >= 5 ? (
        <div className="H-leftleg" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-leftleg" style={{ visibility: "hidden" }}></div>
      )}

      {props.incorrect >= 6 ? (
        <div className="H-rightleg" style={{ visibility: "visible" }}></div>
      ) : (
        <div className="H-rightleg" style={{ visibility: "hidden" }}></div>
      )}
    </div>
  );
};

export default HangHuman;
