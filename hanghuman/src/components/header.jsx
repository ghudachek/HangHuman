import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/">
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
      </Link>
    </div>
  );
}

export default Header;
