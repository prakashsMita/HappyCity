import React from "react";
import { Link } from "react-router-dom";
import Home1 from '../Components/img/custom-img/home1bgr.png'
import Tellycall from '../Components/img/custom-img/tellycall.png'
function Contact() {
    return (
        <>
            <div className="contact-main ">

                <div className="contact-bg">
                    <div className="px-3">
                    <div className="row">
                        <div className="text-center pt-5">
                            <img src={Home1} alt="logo" className="w-25" ></img>
                        </div>
                    </div>



                    <div className="container mt-4 contact-details p-4 rounded-4">

                    <div className="row text-center mx-auto ">
                        <h5 className="fw-bold text-secondary bg-light w-50 mx-auto p-2 rounded-5 ">Contact Us</h5>
                    </div>

                        <div className="row p-2 border-bottom border-2 border-secondary">
                            <span className="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg></span>
                            <p className="col-10 p-0 m-0">Happy City Promoters, RM Colony Main Rd, RM Colony, Dindigul, Tamil Nadu 624001</p>
                        </div>
                        <div className="row p-2 py-3 border-bottom border-2 border-secondary">
                            <span className="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill text-success" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg></span>
                            <p className="col-10 m-0">+91 96003 06517</p>
                        </div>
                        <div className="row p-2 py-3 border-bottom border-2 border-secondary">
                            <span className="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill text-info" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg></span>
                            <p className="col-10 m-0">happycitymts@gmail.com</p>
                        </div>
                        <div className="row p-2 pt-3">
                            <span className="col-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe text-secondary" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg></span>
                            <p className="col-10 m-0">www.happycitypromoters.com</p>
                        </div>


                    </div>
                    <div className="row contact-tellycall pt-5">
                    <div className="pt-4">
                            <img src={Tellycall} alt="logo" className="w-50" ></img>
                        </div>
                    </div>



      {/* Footer Nav */}
      <div className="footer-nav-area bg-dark" id="footerNav">
        <div className="suha-footer-nav">
          <ul className="h-100 d-flex align-items-center justify-content-between ps-0 d-flex rtl-flex-d-row-r">
            <li><Link to="/Home"><i className="ti ti-home text-warning"></i>Home</Link></li>
            <li><a href="#"><i className="ti ti-message text-warning"></i>Chat</a></li>
            <li><a href="#"><i className="ti ti-phone text-warning"></i>Contact</a></li>
            <li><a href="#"><i className="ti ti-settings text-warning"></i>Settings</a></li>
            {/* <li><a href="#"><i className="ti ti-heart text-warning"></i>Pages</a></li> */}
          </ul>
        </div>
      </div>


</div>

                </div>


            </div>
        </>
    )
}
export default Contact;