import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function VisitorList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/visitorlist')
      .then(response => {
        console.log('API Data:', response.data); 
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id, e) => {
    e.preventDefault();
    if (window.confirm("Would you like to delete?")) {
      axios.delete(`http://localhost:8081/visitorlist/${id}`)
        .then(() => {
          setData(data.filter(d => d.id !== id));
        })
        .catch(err => console.log(err));
    }
  };

  // Visitor name filter with defensive checks
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(d => {
    if (!d.visitorName || typeof d.visitorName !== 'string') {
      console.error('Invalid visitorName:', d.visitorName);
      return false;
    }
    return d.visitorName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {/* Header Area */}
      <div className="header-area" id="headerArea">
        <div className="container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r">
          <div className="back-button me-2">
            <Link to="/Home"><i className="ti ti-arrow-left"></i></Link>
          </div>
          <div className="page-heading">
            <h6 className="mb-0">Visitor List</h6>
          </div>
          <div className="suha-navbar-toggler ms-2" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas">
            <div><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-start suha-offcanvas-wrap" tabIndex="-1" id="suhaOffcanvas" aria-labelledby="suhaOffcanvasLabel">
        <button className="btn-close btn-close-white" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <div className="offcanvas-body bg-dark">
          <div className="sidenav-profile">
            <div className="user-profile"><img src="assets/img/custom-img/logo1.png" alt=""/></div>
            <div className="user-info">
              <h5 className="user-name mb-1 text-warning">Happy City Promoters</h5>
              <p className="available-balance text-white">Available points <span className="counter">499</span></p>
            </div>
          </div>
          <ul className="sidenav-nav ps-0">
            <li><a href="#"><i className="ti ti-user text-info"></i>My Profile</a></li>
            <li><a href="#"><i className="ti ti-bell-ringing lni-tada-effect text-info"></i>Notifications<span className="ms-1 badge badge-warning">3</span></a></li>
            <li className="suha-dropdown-menu">
              <a href="#"><i className="ti ti-building-store text-info"></i>Shop Pages</a>
              <ul>
                <li><a href="#">Shop Grid</a></li>
                <li><a href="#">Shop List</a></li>
                <li><a href="#">Product Details</a></li>
                <li><a href="#">Featured Products</a></li>
                <li><a href="#">Flash Sale</a></li>
              </ul>
            </li>
            <li><a href="#"><i className="ti ti-notebook text-info"></i>All Pages</a></li>
            <li className="suha-dropdown-menu">
              <a href="#"><i className="ti ti-heart text-info"></i>My Wishlist</a>
              <ul>
                <li><a href="#">Wishlist Grid</a></li>
                <li><a href="#">Wishlist List</a></li>
              </ul>
            </li>
            <li><a href="#"><i className="ti ti-adjustments-horizontal text-info"></i>Settings</a></li>
            <li><a href="#"><i className="ti ti-logout text-info"></i>Sign Out</a></li>
          </ul>
        </div>
      </div>

      {/* Page Content Wrapper */}
      <div className="page-content-wrapper">
        <div className="container">
          <div className="section-heading d-flex align-items-center pt-3 justify-content-between rtl-flex-d-row-r">
            <h6>Visitor(s)</h6><a className="notification-clear-all text-secondary" href="#"></a>
          </div>
          <div className="notification-area pb-2">
            <div className="row">
              <div className="col-12">
                <Link to="/UserForm">
                  <button className="btn btn-sm btn-success float-end mb-3">Add Visitors +</button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-3">
                <input
                  type="text"
                  placeholder="Search visitors"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="list-group">
              {filteredData.map((d) => (
                <div className="row" key={d.id}>
                  <a className="list-group-item d-flex align-items-center border-0" href="#">
                    <span className="noti-icon col-1">
                      <img src="assets/img/core-img/visitor/visitor.png" alt="visitor"/>
                    </span>
                    <div className="noti-info col-3">
                      <h6 className="mb-1 text-center">{d.visitorName}</h6><span className="text-center">{d.VistDate}</span>
                    </div>
                    <div className="col-8">
                      <Link to={`/FormDetails/${d.id}`}>
                        <button className="btn btn-sm btn-info me-2 ms-5 text-dark">Details</button>
                      </Link>
                      <Link to={`/Edit/${d.id}`}>
                        <button className="btn btn-sm btn-warning me-2">Edit</button>
                      </Link>
                      <button onClick={(e) => handleDelete(d.id, e)} className="btn btn-sm btn-danger me-2">Delete</button>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Internet Connection Status */}
      <div className="internet-connection-status" id="internetStatus"></div>

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
    </>
  );
}

export default VisitorList;
