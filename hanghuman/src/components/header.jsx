import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <button>
        <Link to="/form">Create Your Own Level</Link>
      </button>

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
