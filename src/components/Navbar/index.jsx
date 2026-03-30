import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <style>{`
        .navbar-brand {
          letter-spacing: 3px;
          color: #c24244 !important;
        }

        .navbar-brand:hover {
          color: #c24244 !important;
        }

        .navbar-scroll .nav-link,
        .navbar-scroll .fa-bars {
          color: #7f4722 !important;
        }

        .navbar-scrolled .nav-link,
        .navbar-scrolled .fa-bars {
          color: #7f4722 !important;
        }

        .navbar-scrolled {
          background-color: #ffede7;
        }
      `}</style>

      <nav
        className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0"
        style={{ backgroundColor: "#ffede7" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Task Verse
          </Link>

          <button
            className="navbar-toggler ps-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
          >
            <span className="d-flex justify-content-start align-items-center">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-3" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-3" to="/add-task">
                  Add Task
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-3" to="/users">
                  Users
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-3" to="/add-user">
                  Add User
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <Link className="nav-link px-3" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link ps-3" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}