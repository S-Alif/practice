import '../css/Header.css'

const Header = () => {
  return (
    <>

    <section className="home" id="home">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-capitalize fw-bolder display-2">john doe</h1>
        <p className="pt-2">A Developer and Designer</p>

          <a href="#about" className="text-capitalize btn btn-danger btn-lg pe-4 ps-4 rounded-pill mt-3">about</a>
      </div>
    </section>
      
    </>
  );
};

export default Header;