import React, { useState } from 'react';
import Slider from 'react-slick';
import '../Components/styles.css';
import '../Components/slick.css';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const Home = () => {

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlides, setCurrentSlides] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3900,
    afterChange: (index) => setCurrentSlide(index),
  };

  const settingss = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (index) => setCurrentSlides(index),
  };

  return (
    <>

      {/* <!-- Preloader--> */}
      {/* <div class="preloader" id="preloader">
      <div class="spinner-grow text-secondary" role="status">
        <div class="sr-only"></div>
      </div>
    </div> */}
    {/* Back Button */}
    <div className="back-button me-2">
            <Link to="/Home"><i className="ti ti-arrow-left"></i></Link>
          </div>

      <div class="header-area bg-dark " id="headerArea">
        <div class="container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">

          <div class="logo-wrapper"><a href="#"><img className='home-logo' src="assets/img/custom-img/logo1.png" alt="" /></a></div>
          <div class="navbar-logo-container d-flex align-items-center">

            <div class="user-profile-icon ms-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person text-warning" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></a></div>

            <div class="suha-navbar-toggler ms-2" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
              <div><span></span><span></span><span></span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas offcanvas-start suha-offcanvas-wrap" tabindex="-1" id="suhaOffcanvas" aria-labelledby="suhaOffcanvasLabel">
        {/* <!-- Close button--> */}
        <button class="btn-close btn-close-white" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        {/* <!-- Offcanvas body--> */}
        <div class="offcanvas-body bg-dark">
          {/* <!-- Sidenav Profile--> */}
          <div class="sidenav-profile">
            <div class="user-profile"><img src="assets/img/custom-img/logo1.png" alt="" /></div>
            <div class="user-info">
              <h5 class="user-name mb-1 text-warning">Happy City Promoters</h5>
              <p class="available-balance text-white">Available points <span class="counter">499</span></p>
            </div>
          </div>
          {/* <!-- Sidenav Nav--> */}
          <ul class="sidenav-nav ps-0">
            <li><a href="#"><i class="ti ti-user text-info"></i>My Profile</a></li>
            <li><a href="#"><i class="ti ti-bell-ringing lni-tada-effect  text-info"></i>Notifications<span class="ms-1 badge badge-warning">3</span></a></li>
            <li class="suha-dropdown-menu"><a href="#"><i class="ti ti-building-store  text-info"></i>Shop Pages</a>
              <ul>
                <li><a href="#">Shop Grid</a></li>
                <li><a href="#">Shop List</a></li>
                <li><a href="#">Product Details</a></li>
                <li><a href="#">Featured Products</a></li>
                <li><a href="#">Flash Sale</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="ti ti-notebook  text-info"></i>All Pages</a></li>
            <li class="suha-dropdown-menu"><a href="#"><i class="ti ti-heart  text-info"></i>My Wishlist</a>
              <ul>
                <li><a href="#">Wishlist Grid</a></li>
                <li><a href="#">Wishlist List</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="ti ti-adjustments-horizontal  text-info"></i>Settings</a></li>
            <li><a href="#"><i class="ti ti-logout  text-info"></i>Sign Out</a></li>
          </ul>
        </div>
      </div>
      {/* <!-- PWA Install Alert --> */}
      <div class="toast pwa-install-alert shadow bg-white" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000" data-bs-autohide="true">
        <div class="toast-body">
          <div class="content d-flex align-items-center mb-2"><img src="assets/img/icons/icon-72x72.png" alt="" />
            <h6 class="mb-0">Add to Home Screen</h6>
            <button class="btn-close ms-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button>
          </div><span class="mb-0 d-block">Click the<strong class="mx-1">Add to Home Screen</strong>button &amp; enjoy it like a regular app.</span>
        </div>
      </div>
      <div class="page-content-wrapper ">
        {/* <!-- Search Form--> */}
        {/* <!-- Search Form--> */}
        {/* <div class="container">
        <div class="search-form pt-3 rtl-flex-d-row-r">
          <form action="#" method="">
            <input class="form-control" type="search" placeholder="Search in Suha"/>
            <button type="submit"><i class="ti ti-search"></i></button>
          </form>
          
          <div class="alternative-search-options">
            <div class="dropdown"><a class="btn btn-primary dropdown-toggle" id="altSearchOption" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="ti ti-adjustments-horizontal"></i></a>
              
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="altSearchOption">
                <li><a class="dropdown-item" href="#"><i class="ti ti-microphone"> </i>Voice</a></li>
                <li><a class="dropdown-item" href="#"><i class="ti ti-layout-collage"> </i>Image</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}



        <div className="hero-wrapper bg-light py-4">
          <div className="container">
            <div className="pt-3">
              <Slider {...settings} className="hero-slides1 owl-carousel ">
                {/* Single Hero Slide 1 */}
                <div className={`single-hero-slide bg-img-1  ${currentSlide === 0 ? 'active-slide' : ''}`}>
                  <div className="slide-content h-100 d-flex align-items-center">
                    <div className="slide-text">
                      {/* <h4 className={`slider-text-h4 text-white mb-0 bg-img-1 ${currentSlide === 0 ? 'active-slide' : ''}`} data-animation="fadeInUp" data-delay="100ms" data-duration="1000ms">
                    Amazon Echo
                  </h4>
                  <p className={`slider-text-p text-white mb-0 bg-img-1 ${currentSlide === 0 ? 'active-slide' : ''}`} data-animation="fadeInUp" data-delay="400ms" data-duration="1000ms">
                    3rd Generation, Charcoal
                  </p>
                  <a className={`slider-text-a btn btn-primary bg-img-1 ${currentSlide === 0 ? 'active-slide' : ''}`} href="#" data-animation="fadeInUp" data-delay="500ms" data-duration="1000ms">
                    Buy Now
                  </a> */}
                    </div>
                  </div>
                </div>

                {/* Single Hero Slide 2 */}
                <div className={`single-hero-slide bg-img-2 ${currentSlide === 1 ? 'active-slide' : ''}`}>
                  <div className="slide-content h-100 d-flex align-items-center">
                    <div className="slide-text">
                      {/* <h4 className={`slider-text-h4 text-white mb-0 bg-img-2 ${currentSlide === 0 ? 'active-slide' : ''}`} data-animation="fadeInUp" data-delay="100ms" data-duration="1000ms">
                    Light Candle
                  </h4>
                  <p className={`slider-text-p text-white mb-0 bg-img-2 ${currentSlide === 0 ? 'active-slide' : ''}`} data-animation="fadeInUp" data-delay="400ms" data-duration="1000ms">
                    Now only $22
                  </p>
                  <a className={`slider-text-a btn btn-primary bg-img-2 ${currentSlide === 0 ? 'active-slide' : ''}`} href="#" data-animation="fadeInUp" data-delay="500ms" data-duration="1000ms">
                    Buy Now
                  </a> */}
                    </div>
                  </div>
                </div>


                {/* Single Hero Slide 3 */}
                <div className={`single-hero-slide bg-img-3 ${currentSlide === 2 ? 'active-slide' : ''}`}>
                  <div className="slide-content h-100 d-flex align-items-center">
                    <div className="slide-text">
                      {/* <h4 className={`slider-text-h4 text-white mb-0 bg-img-3 ${currentSlide === 0 ? 'active-slide' : ''}`} data-animation="fadeInUp" data-delay="100ms" data-duration="1000ms">
                    Best Furniture
                  </h4>
                  <p className={`slider-text-p text-white mb-0 bg-img-3 ${currentSlide === 0 ? 'active-slide' : ''}`} data-animation="fadeInUp" data-delay="400ms" data-duration="1000ms">
                    3 years warranty
                  </p>
                  <a className={`slider-text-a btn btn-primary bg-img-3 ${currentSlide === 0 ? 'active-slide' : ''}`} href="#" data-animation="fadeInUp" data-delay="500ms" data-duration="1000ms">
                    Buy Now
                  </a> */}
                    </div>
                  </div>
                </div>


              </Slider>
            </div>
          </div>
        </div>


        {/* <!-- Product Catagories --> */}
        <div class="product-catagories-wrapper p-2 bg-light">
          <div class="container">
            <div class="row g-3 rtl-flex-d-row-r">
              {/* <!-- Catagory Card --> */}  
              <div class="col-3">
                <Link to='/VisitorList'><div class="card catagory-card" >
                  <div class="card-body px-2"><a href="#"><img src="assets/img/custom-img/visitor.png" alt="" /><span>Visiters</span></a></div>
                </div>
                </Link>
              </div>

              {/* <!-- Catagory Card --> */}
              <div class="col-3">
               <Link to={'/UserForm'}> <div class="card catagory-card">
                  <div class="card-body px-2"><a href="#"><img src="assets/img/custom-img/account.png" alt="adduser" /><span>New User</span></a></div>
                </div>
                </Link>
              </div>
              {/* <!-- Catagory Card --> */}
              <div class="col-3">
                <div class="card catagory-card">
                  <div class="card-body px-2"><a href="#"><img src="assets/img/custom-img/call.png" alt="contact" /><span>Contact</span></a></div>
                </div>
              </div>
              {/* <!-- Catagory Card --> */}
              <div class="col-3">
                <div class="card catagory-card">
                  <div class="card-body px-2"><a href="#"><img src="assets/img/custom-img/log-in.png" alt="about" /><span>Log in</span></a></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* slide -2  */}

        <div className="hero-wrapper bg-light py-3">
          <div className="container">
            <div className="pt-3">
              <Slider {...settingss} className="hero-slides owl-carousel">
                {/* Single Hero Slide 1 */}
                <div className={`single-hero-slide bg-img-tran-1 ${currentSlides === 0 ? 'active-slide' : ''}`}>
                  <div className="slide-content h-100 d-flex align-items-center">
                    <div className="slide-text">
                    </div>
                  </div>
                </div>

                {/* Single Hero Slide 2 */}
                <div className={`single-hero-slide bg-img-tran-2 ${currentSlides === 1 ? 'active-slide' : ''}`}>
                  <div className="slide-content h-100 d-flex align-items-center">
                    <div className="slide-text">
                    </div>
                  </div>
                </div>


                {/* Single Hero Slide 3 */}
                <div className={`single-hero-slide bg-img-tran-3 ${currentSlides === 2 ? 'active-slide' : ''}`}>
                  <div className="slide-content h-100 d-flex align-items-center">
                    <div className="slide-text">
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>


        {/* <!-- Internet Connection Status--> */}
        {/* <div class="internet-connection-status " id="internetStatus"></div> */}
        {/* <!-- Footer Nav--> */}
        <div class="footer-nav-area bg-dark" id="footerNav">
          <div class="suha-footer-nav">
            <ul class="h-100 d-flex align-items-center justify-content-between ps-0 d-flex rtl-flex-d-row-r">
              <li><Link to={"/Home"}><a><i class="ti ti-home text-warning"></i>Home</a></Link></li>
              <li><a href="#"><i class="ti ti-message text-warning"></i>Chat</a></li>
              <li><Link to={'/Contact'}><a href="#"><i class="ti ti-phone text-warning"></i>Contact</a></Link></li>
              <li><a href="#"><i class="ti ti-settings text-warning"></i>Settings</a></li>
              {/* <li><a href="#"><i class="ti ti-heart text-warning"></i>Pages</a></li> */}
            </ul>
          </div>
        </div>




      </div>









    </>

  );
};

export default Home;
