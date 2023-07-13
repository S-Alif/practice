// import { useState } from "react";
import Alert from "./Alert";

const Contact = () => {

  let form_check = () => {
    let name = document.getElementById('name')
    // let email = document.getElementById('email')
    // let sub = document.getElementById('subject')
    // let msg = document.getElementById('msg')

    if (name.value.length < 3 || name.value == "") {
      <Alert alertClass="alert-danger" alertMsg="Name cannot be less that 3 characters or empty" />
    }
  }


  return (
    <>
      <section className="my-section contact bg-body-tertiary" id="contact">
        <div className="container">
          <h4 className="section-title text-uppercase fw-bolder fs-6 text-danger pb-5 mb-3 text-center">send a message</h4>

          <form action="" noValidate>
            <div className="row">

              <div className="col-lg-4 col-md-6 mt-4">
                <input type="text" name="name" className="form-control text-dark-emphasis fw-medium" id="name" placeholder="Your name" required />
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <input type="email" name="emai" className="form-control text-dark-emphasis fw-medium" id="email" placeholder="Your email" required />
              </div>
              <div className="col-lg-4 mt-4">
                <input type="text" name="subject" className="form-control text-dark-emphasis fw-medium" id="subject" placeholder="Subject" required />
              </div>
              <div className="col-lg-12 mt-4 mb-4">
                <textarea name="msg" id="msg" className="form-control text-dark-emphasis fw-medium" cols="100" rows="10" placeholder="Your message" required />
              </div>

              <div className="col-lg-12 text-end">
                <button type="submit" id="submit-btn" className="text-capitalize btn btn-success btn-lg pe-4 ps-4 rounded-pill" onClick={form_check}>submit</button>
              </div>

            </div>
          </form>

        </div>
      </section>
    </>
  );
};

export default Contact;