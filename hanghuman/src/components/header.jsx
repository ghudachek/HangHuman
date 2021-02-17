import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/form">Create Your Own Level</Link>

      <h3>Choose a Level:</h3>
      <Link to="/easy/:easy">Easy</Link>

      <Link to="/medium/:medium">Medium</Link>

      <Link to="/hard/:hard">Hard</Link>
    </div>
  );
}

export default Header;
