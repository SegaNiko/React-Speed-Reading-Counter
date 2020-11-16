import React from "react";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../consts/routes";
import Container from "../../shared/Container/Container";
import "./index.scss";

const NavBar = () => {
  return (
    <Container>
      <div className="header__wrap">
        <div className="logo">
          <Link to={ROUTES.ROOT} className="logo__link">
            S
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                className="header__link btn-cream"
                activeClassName="link__active"
                to={ROUTES.ROOT}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header__link  btn-pink"
                activeClassName="link__active"
                to={ROUTES.READING_COUNTER}
              >
                Start
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default NavBar;
