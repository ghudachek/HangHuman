import { useState } from "react";
import Alert from "react-bootstrap/Alert";
function WinLose(props) {
  //give a limited amount of wrong answers..
  const [wrong, setWrong] = useState(0);
  const [visiblity, setVisibility] = useState(false);

  console.log(wrong);
  //check wrong answers everytime button is clicked.
  // function checkWrong() {
  //   if (wrong === 5) {
  //     //alert you lose!
  //     //show word
  //   } else if (props.selectedWord === props.guess) {
  //     //alert You WIn!
  //     //show word..
  //   }
  // }

  return (
    <Alert varient="danger">
      <Alert.Heading>YOU LOSE</Alert.Heading>
      <p>add animation within...</p>
    </Alert>
  );
}

export default WinLose;
