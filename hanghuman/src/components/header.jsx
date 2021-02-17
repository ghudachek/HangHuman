import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div>
        <h3>Choose a Level:</h3>
        <button>
          <Link to="/:easy">Easy</Link>
        </button>
        <button>
          <Link to="/:medium">Medium</Link>
        </button>
        <button>
          <Link to="/:hard">Hard</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
