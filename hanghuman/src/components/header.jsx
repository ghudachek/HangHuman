import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="header">
        <h1>HANG-HUMAN</h1>
        <h3>~The Gender-Inclusive Hangman~</h3>
        <Link to="/form">Create Your Own Level</Link>
      </div>

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
  );
}

export default Header;
