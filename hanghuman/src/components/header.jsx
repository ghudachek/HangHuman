import { Link } from "react-router-dom";
import StickFigure from "./stickFigure";
function Header() {
  return (
    <div className="header-all">
      <div className="header">
        <h2>HANG-HUMAN</h2>
        <h4>~The Gender-Nuetral Hangman~</h4>
        <Link to="/form">Create Your Own Level</Link>
      </div>
      <div className="level-btns">
        <h3>Choose a Level:</h3>
        <button>
          <Link to="/easy/:easy">Easy</Link>
        </button>
        <button>
          <Link to="/medium/:medium">Medium</Link>
        </button>
        <button>
          <Link to="/hard/:hard">Hard</Link>
        </button>
      </div>
      <div className="figure">
        <StickFigure />
      </div>
    </div>
  );
}

export default Header;
