import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function FormDetails() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get id from URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching details for ID: ${id}`); // Add this line
        const response = await axios.get(`http://localhost:8081/visitorlist/${id}`);
        console.log('API Response:', response.data); // Add this line
        setData(response.data);
      } catch (err) {
        console.error('Fetch error:', err.response ? err.response.data : err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="back-button me-2">
        <Link to="/visitorlist"><i className="ti ti-arrow-left"></i></Link>
      </div>
      <div className="mx-1">
        <div className=''>
        <h3 className='text-center'>VISITOR DETAILS</h3>
        <form className="form px-4">
        <div className='row text-center'>
              <div className='col-12'>
              <img src='../assets/img/custom-img/logo1.png' alt='logo' className='w-25 p-1'></img>
              </div>
              <div className='col-12'>
              <img src='../assets/img/custom-img/logo.png' alt='logo' className='w-50 py-2'></img>
              </div>
            </div>
          <div className="row py-1">
            <label htmlFor="manaipirivu" className="col-md-6">மனைப்பிரிவு :</label>
            <input type="text" className="form-control" id="manaipirivu" value={data.manaipirivu || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="visitorName" className="col-md-6">நாள் :</label>
            <input type="text" className="form-control" id="visitorName" value={data.VistDate || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="visitorName" className="col-md-6">நேரம் :</label>
            <input type="text" className="form-control" id="visitorName" value={data.vistTime || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="visitorName" className="col-md-6">பெயர் :</label>
            <input type="text" className="form-control" id="visitorName" value={data.visitorName || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="visitDate" className="col-md-6">தொழில் :</label>
            <input type="text" className="form-control" id="visitDate" value={data.occ || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">முகவரி :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.address || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">மொபைல் எண் :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.num || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">உடன் வந்திருப்போர் எண்ணிக்கை :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.totalcount || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">Feedback :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.feedback || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">Associate Name :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.associateName || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">Travels Name & Number :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.travelName || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">Driver Mobile No :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.drMob || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">K.M. Details :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.kmDetails || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">Associate Director Name:</label>
            <input type="text" className="form-control" id="contactNumber" value={data.associateDirectorName || ''} readOnly />
          </div>
          <div className="row py-1">
            <label htmlFor="contactNumber" className="col-md-6">Associate Director Sign :</label>
            <input type="text" className="form-control" id="contactNumber" value={data.associateDirectorSign || ''} readOnly />
          </div>

          {/* Add more fields as needed */}
          <div className='text-center py-2'>
            <Link className='' to={'/VisitorList'}><button type="submit" className='btn btn-warning w-25 fw-bold text-center mx-auto'>GO BACK</button></Link>
            </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default FormDetails;
