import react from "react";
import { Link } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import LogoutForm from "../pages/LogoutForm";
import RegistrationForm from "../pages/RegistrationForm";

const Header = () => {
  const user = "Harry";
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky"
      // style={{ zIndex: 100 }}
    >
      <Link class="navbar-brand" href="/">
        GetFeedback
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
              <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/features">
              Features
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          {user !== null ? (
            <>
              <li class="nav-item">
                <Link class="nav-link" to="/createform">
                  Create Form
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/response">
                  Responses
                </Link>
              </li>
            </>
          ) : null}
        </ul>
        {user === null ? (
          <>
            <LoginForm />
            &nbsp;
            <RegistrationForm />
          </>
        ) : (
          <>
            <h4>{`Hey! ${user}`}</h4>
            &nbsp; &nbsp; &nbsp;
            <LogoutForm />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
