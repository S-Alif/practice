// import navbar css for custom design
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bolder fs-3" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse mt-lg-0" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;