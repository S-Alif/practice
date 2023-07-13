import '../css/Homepage.css'
import { FaCode, FaPenNib, FaPalette } from "react-icons/fa6";

// import componenets
import Footer from "../components/Footer"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Contact from '../components/Contact';

const Homepage = () => {

  return (
    <>
      <Navbar />
      <Header />

      <div className="alert d-none" role="alert">
        A simple success alert—check it out!
      </div>


      <section className="about my-section" id="about">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-12">
              <div className="image rounded">
                <img src="/imgs/about.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="text-content ps-lg-5 mt-5 mt-lg-0">
                <h1 className="display-6 text-capitalize fw-bold pb-4">john doe</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolorem, fugiat distinctio voluptatum beatae culpa facilis! Error labore ipsa perspiciatis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, architecto minus sit laboriosam maxime iusto.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id iure delectus accusamus maxime perferendis hic, neque sed placeat fugiat natus, quaerat iste laudantium eius enim, quos exercitationem sint? Non.</p>

                <a href="#contact" className="text-capitalize btn btn-success btn-lg pe-4 ps-4 rounded-pill mt-3">contact</a>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="service my-section bg-body-tertiary" id="service">
        <div className="container">

          <h4 className="section-title text-uppercase fw-bolder fs-6 text-danger pb-5 mb-3 text-center">what i do </h4>

          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="service-box p-4 mt-4 rounded bg-body text-center">
                <FaPenNib className="display-4 pb-4 text-primary" />
                <h4 className="text-capitalize fw-bold text-body-emphasis">web design</h4>
                <p className="pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ipsum nam nobis nostrum doloribus sit dolorem placeat cupiditate eum eos.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box p-4 mt-4 rounded bg-body text-center">
                <FaCode className="display-4 pb-4 text-success" />
                <h4 className="text-capitalize fw-bold text-body-emphasis">web development</h4>
                <p className="pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ipsum nam nobis nostrum doloribus sit dolorem placeat cupiditate eum eos.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box p-4 mt-4 rounded bg-body text-center">
                <FaPalette className="display-4 pb-4 text-danger" />
                <h4 className="text-capitalize fw-bold text-body-emphasis">graphics design</h4>
                <p className="pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ipsum nam nobis nostrum doloribus sit dolorem placeat cupiditate eum eos.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="my-section portfolio" id="portfolio">
        <div className="container">
          <h4 className="section-title text-uppercase fw-bolder fs-6 text-danger pb-5 mb-3 text-center">my works</h4>

          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="w-box rounded mt-4">
                <img src="/imgs/p1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="w-box rounded mt-4">
                <img src="/imgs/p2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="w-box rounded mt-4">
                <img src="/imgs/p3.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="w-box rounded mt-4">
                <img src="/imgs/p4.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="w-box rounded mt-4">
                <img src="/imgs/p5.jpg" alt="" />
              </div>
            </div>
            

          </div>

        </div>
      </section>


      <Contact />
      <Footer />

    </>
  );
};

export default Homepage;