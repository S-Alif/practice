import { FaFacebookF, FaTwitter, FaInstagram, FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>

    <footer className="pt-5 pb-5 bg-black">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 text-center">
              <div className="navbar-nav d-flex flex-row justify-content-center">
                <a className="nav-link text-light m-3" href="#"><FaFacebookF /></a>
                <a className="nav-link text-light m-3" href="#"><FaTwitter /></a>
                <a className="nav-link text-light m-3" href="#"><FaInstagram /></a>
              </div>

              <p className="lead text-light">
                <FaCopyright /> <a href="" className="text-decoration-none text-light fw-bold ps-1">Logo</a> | | All Rights Reserved
              </p>
          </div>

        </div>
      </div>
    </footer>
      
    </>
  );
};

export default Footer;