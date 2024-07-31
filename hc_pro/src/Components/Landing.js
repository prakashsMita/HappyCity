import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Components/styles.css';
import '../Components/slick.css';

function Landing() {
  const [values, setValues] = useState({
    visitorEmail: '',
    visitorPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form values:', values);

    axios.post('http://localhost:8081/login', values, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log('Response:', res.data);
        navigate('/Home');
      })
      .catch(err => {
        console.error('Error:', err.response ? err.response.data : err);
        alert('Error: ' + (err.response ? err.response.data.error : 'Unknown error'));
      });
  };

  return (
    <>
      <div className="login-wrapper d-flex align-items-center justify-content-center text-center">
        <div className="background-shape"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8">
              <img className="big-logo" src="assets/img/custom-img/logo1.png" alt="logo"  />
              <div className='pt-4'>
                <img className="big-logo-title" src="assets/img/custom-img/logo.png" alt="logo" />
              </div>
              <div className="register-form mt-5 border-dark p-3 border-5 rounded-5 py-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-group text-start mb-4">
                    <span className=''>Username</span>
                    <label htmlFor="username"><i className="ti ti-user text-secondary"></i></label>
                    <input
                      className="form-control"
                      id="username"
                      type="email"
                      value={values.visitorEmail}
                      onChange={e => setValues({ ...values, visitorEmail: e.target.value })}
                      placeholder="info@example.com"
                      required
                    />
                  </div>
                  <div className="form-group text-start mb-4">
                    <span>Password</span>
                    <label htmlFor="password"><i className="ti ti-key text-secondary"></i></label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      value={values.visitorPassword}
                      onChange={e => setValues({ ...values, visitorPassword: e.target.value })}
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  <button className="btn btn-lg w-100 border border-5 rounded-5" type="submit">Log In</button>
                </form>
              </div>
              <div className="login-meta-data mt-3">
                <a className="forgot-password d-block mt-3 mb-1" href="#">Forgot Password?</a>
                <p className="mb-0">Don't have an account?<a className="mx-1" href="#">Register Now</a></p>
              </div>
              {/* <div className="view-as-guest mt-3">
                <a className="btn btn-primary btn-sm" href="https://designing-world.com/suha-3.1.0/home.html">View as guest<i className="ps-2 ti ti-arrow-right"></i></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
