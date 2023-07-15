import { NavLink } from "react-router-dom";
import "../sass/layout/_header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <NavLink to="/">MEGA NEWS</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
