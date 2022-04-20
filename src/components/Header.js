import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <header>Feedback App</header>
        </Link>
      </div>
    </header>
  );
};

export default Header;
