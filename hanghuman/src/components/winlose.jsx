import { useState } from "react";
import Alert from "react-bootstrap/Alert";
function WinLose(props) {
  //give a limited amount of wrong answers..

  if (props.incorrect === 9) {
    return (
      <Alert varient="danger">
        <Alert.Heading>YOU LOSE</Alert.Heading>
        <p>so sorry try again..</p>
      </Alert>
    );
  } else return null;
}

export default WinLose;
