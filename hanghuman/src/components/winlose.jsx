import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
function WinLose(props) {
  const [restart, setRestart] = useState(false);
  if (props.incorrect === 9) {
    return (
      <div className="you-lose">
        <Alert varient="danger">
          <Alert.Heading>YOU LOSE</Alert.Heading>
          <p>so sorry try again..</p>
        </Alert>

        <button
          onClick={(e) => {
            e.preventDefault();
            setRestart((curr) => !curr);
          }}
        >
          Restart
        </button>
      </div>
    );
  } else return null;
}

export default WinLose;
