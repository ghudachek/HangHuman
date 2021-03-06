import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
function Lose(props) {
  if (props.incorrect === 8) {
    return (
      <div className="you-lose">
        <Alert>
          <Alert.Heading>YOU LOSE</Alert.Heading>
          <h2>The word was: {props.selectedWord}</h2>
          <p>so sorry try again..</p>
        </Alert>
        <button>
          <Link to="/">Restart</Link>
        </button>
      </div>
    );
  } else {
    return null;
  }
}
export default Lose;
