import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function Edit() {
  const [manaipirivu, setManaipirivu] = useState('');
  const [visitorName, setVisitorName] = useState('');
  const [VistDate, setVistDate] = useState('');
  const [vistTime, setVistTime] = useState('');
  const [occ, setOcc] = useState('');
  const [address, setAddress] = useState('');
  const [num, setNum] = useState('');
  const [totalcount, setTotalCount] = useState('');
  const [feedback, setFeedback] = useState('');
  const [associateName, setAssociateName] = useState('');
  const [travelName, setTravelName] = useState('');
  const [drMob, setDrMob] = useState('');
  const [kmDetails, setKmDetails] = useState('');
  const [associateDirectorName, setAssociateDirectorName] = useState('');
  const [associateDirectorSign, setAssociateDirectorSign] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8081/visitorlist/${id}`)
      .then(res => {
        const data = res.data;
        console.log('Fetched Data:', data); // Debugging
        setManaipirivu(data.manaipirivu || '');
        setVisitorName(data.visitorName || '');
        setVistDate(data.VistDate || '');
        setVistTime(data.vistTime || '');
        setOcc(data.occ || '');
        setAddress(data.address || '');
        setNum(data.num || '');
        setTotalCount(data.totalcount || '');
        setFeedback(data.feedback || '');
        setAssociateName(data.associateName || '');
        setTravelName(data.travelName || '');
        setDrMob(data.drMob || '');
        setKmDetails(data.kmDetails || '');
        setAssociateDirectorName(data.associateDirectorName || '');
        setAssociateDirectorSign(data.associateDirectorSign || '');
      })
      .catch(err => {
        console.error('Error fetching visitor:', err);
        alert('Failed to fetch visitor data');
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedVisitor = {
      manaipirivu,
      visitorName,
      VistDate,
      vistTime,
      occ,
      address,
      num,
      totalcount,
      feedback,
      associateName,
      travelName,
      drMob,
      kmDetails,
      associateDirectorName,
      associateDirectorSign
    };
    console.log('Updating visitor with data:', updatedVisitor); // Debugging
    axios.put(`http://localhost:8081/visitorlist/${id}`, updatedVisitor)
      .then(res => {
        console.log('Response:', res.data);
        navigate('/visitorlist');
      })
      .catch(err => {
        console.error('Error:', err.response ? err.response.data : err.message);
        alert('Failed to update visitor');
      });
  };

  return (
    <>
      <div className="back-button me-2">
        <Link to="/visitorlist"><i className="ti ti-arrow-left"></i></Link>
      </div>
      <div className="mx-1">
        <div className=''>
          <h3 className='text-center'>EDIT VISITOR DETAILS</h3>
          <form className="form px-4" onSubmit={handleSubmit}>
            
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
              <input type="text" className="form-control" id="manaipirivu" value={manaipirivu}
                onChange={e => setManaipirivu(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="VistDate" className="col-md-6">நாள் :</label>
              <input type="date" className="form-control" id="VistDate" value={VistDate}
                onChange={e => setVistDate(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="vistTime" className="col-md-6">நேரம் :</label>
              <input type="time" className="form-control" id="vistTime" value={vistTime}
                onChange={e => setVistTime(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="visitorName" className="col-md-6">பெயர் :</label>
              <input type="text" className="form-control" id="visitorName" value={visitorName}
                onChange={e => setVisitorName(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="occ" className="col-md-6">தொழில் :</label>
              <input type="text" className="form-control" id="occ" value={occ}
                onChange={e => setOcc(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="address" className="col-md-6">முகவரி :</label>
              <input type="text" className="form-control" id="address" value={address}
                onChange={e => setAddress(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="num" className="col-md-6">மொபைல் எண் :</label>
              <input type="tel" className="form-control" id="num" value={num}
                onChange={e => setNum(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="totalcount" className="col-md-6">உடன் வந்திருப்போர் எண்ணிக்கை :</label>
              <input type="number" className="form-control" id="totalcount" value={totalcount}
                onChange={e => setTotalCount(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="feedback" className="col-md-6">Feedback :</label>
              <input type="text" className="form-control" id="feedback" value={feedback}
                onChange={e => setFeedback(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="associateName" className="col-md-6">Associate Name :</label>
              <input type="text" className="form-control" id="associateName" value={associateName}
                onChange={e => setAssociateName(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="travelName" className="col-md-6">Travels Name & Number :</label>
              <input type="text" className="form-control" id="travelName" value={travelName}
                onChange={e => setTravelName(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="drMob" className="col-md-6">Driver Mobile No :</label>
              <input type="tel" className="form-control" id="drMob" value={drMob}
                onChange={e => setDrMob(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="kmDetails" className="col-md-6">K.M. Details :</label>
              <input type="text" className="form-control" id="kmDetails" value={kmDetails}
                onChange={e => setKmDetails(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="associateDirectorName" className="col-md-6">Associate Director Name:</label>
              <input type="text" className="form-control" id="associateDirectorName" value={associateDirectorName}
                onChange={e => setAssociateDirectorName(e.target.value)} />
            </div>
            <div className="row py-1">
              <label htmlFor="associateDirectorSign" className="col-md-6">Associate Director Sign :</label>
              <input type="text" className="form-control" id="associateDirectorSign" value={associateDirectorSign}
                onChange={e => setAssociateDirectorSign(e.target.value)} />
            </div>
            <div className='text-center py-2'>
            <button type="submit" className='btn btn-warning w-25 fw-bold text-center mx-auto'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
