import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div>
        <h3>Choose a Level:</h3>
        <button>
          <Link to="/level/easy">Easy</Link>
        </button>
        <button>
          <Link to="/level/medium">Medium</Link>
        </button>
        <button>
          <Link to="/level/hard">Hard</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
