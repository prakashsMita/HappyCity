import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function UserForm() {
  const [values, setValues] = useState({
    manaipirivu: '',
    visitorName: '',
    VistDate: '',
    vistTime: '',
    occ: '',
    address: '',
    num: '',
    totalcount: '',
    feedback: '',
    associateName: '',
    travelName: '',
    drMob: '',
    kmDetails: '',
    associateDirectorName: '',
    associateDirectorSign: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form values:', values);  // Log form values

    axios.post('http://localhost:8081/visitorlist', values, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log('Response:', res.data);
        navigate('/VisitorList');
      })
      .catch(err => {
        console.error('Error:', err.response ? err.response.data : err);
        alert('Error: ' + (err.response ? err.response.data.error : 'Unknown error'));
      });
  };
  {/* <div className="row py-1">
<label htmlFor="name" className="col-md-6 col-xs-6 col-sm-6 col-6 my-auto p-0">Name:</label>
<input
  type="text"
  className="form-control h-auto p-0 w-50 form-input col-md-6 col-xs-6 col-sm-6 col-6"
  id="name"
  value={values.visitorName}
  onChange={e => setValues({ ...values, visitorName: e.target.value })}
/>
</div> */}


  return (
    <>
      {/* Back Button */}
      <div className="back-button me-2">
        <Link to="/Home"><i className="ti ti-arrow-left"></i></Link>
      </div>
      <div className="mx-1">
        <form className="form px-1" onSubmit={handleSubmit}>
          {/* header */}
          <div className="row m-0 py-1 border-bottom border-4 border-dark rounded-3">
            <div className="col-md-3 col-sm-3 col-3 text-center p-0">
              <img src="assets/img/custom-img/logo1.png" alt="logo" className="w-75 h-100"></img>
            </div>
            <div className="col-md-9 col-sm-9 col-9 text-center p-0 my-auto mt-3">
              <img src="assets/img/custom-img/logo.png" alt="logo"></img>
            </div>
          </div>

          {/* body-1 header-1 */}
          <div className="container p-0 ">
            <div className="row py-1 fw-bold fs-5">
              <div className="col-md-12 col-sm-12 text-center p-0">
                CB TEAM
              </div>
            </div>

            {/* body-1 header-2 */}
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center p-0">
                <p className="bg-warning w-50 mx-auto rounded-5 fw-bold"> விருந்தினர் வருகை பதிவு</p>
              </div>
            </div>

            {/* body-1 right */}
            <div className="row">
              <div className="col-md-3 col-xs-3 col-sm-3 col-3">

              </div>
              <div className="col-md-9 col-xs-9 col-sm-9 col-9 pe-4">
                <div className="row py-1">
                  <label for="manaipirivu" className="col-md-6 col-xs-6 col-sm-6 col-6 my-auto p-0" >மனைப்பிரிவு :</label><input type="text" className="form-control h-auto p-0 w-50 form-input col-md-6 col-xs-6 col-sm-6 col-6 " id="manaipirivu" value={values.manaipirivu}
                  onChange={e => setValues({ ...values, manaipirivu: e.target.value })} />
                </div>
                <div className="row py-1">
                  <label for="date" className="col-md-6 col-xs-6 col-sm-6 col-6 my-auto p-0" >நாள் :</label><input type="text" className="form-control h-auto p-0 w-50 form-input col-md-6 col-xs-6 col-sm-6 col-6 " id="date" value={values.VistDate}
                  onChange={e => setValues({ ...values, VistDate: e.target.value })} />
                </div>
                <div className="row py-1">
                  <label for="time" className="col-md-6 col-xs-6 col-sm-6 col-6 my-auto p-0" >நேரம் :</label><input type="text" className="form-control h-auto p-0 w-50 form-input col-md-6 col-xs-6 col-sm-6 col-6 " id="time" value={values.vistTime}
                  onChange={e => setValues({ ...values, vistTime: e.target.value })} />
                </div>
              </div>
            </div>

            {/* body-1 left */}
            <div className="row p-0 m-0 pt-5 pb-1">
              <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                <label for="name" className="p-0 m-0 my-auto" >பெயர் :</label>
              </div>
              <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" name="name" id="name" value={values.visitorName}
                  onChange={e => setValues({ ...values, visitorName: e.target.value })} />
              </div>
            </div>

            <div className="row p-0 m-0 py-2">
              <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                <label for="occ" className="p-0 m-0 my-auto" >தொழில் :</label>
              </div>
              <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="occ" value={values.occ}
                  onChange={e => setValues({ ...values, occ: e.target.value })}/>
              </div>
            </div>
            <div className="row p-0 m-0 py-2">
              <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                <label for="add" className="p-0 m-0 my-auto" >முகவரி :</label>
              </div>
              <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="add" value={values.address}
                  onChange={e => setValues({ ...values, address: e.target.value })} />
              </div>
            </div>
            <div className="row p-0 m-0 py-2">
              <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                <label for="num" className="p-0 m-0 my-auto" >மொபைல் எண் :</label>
              </div>
              <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="num" value={values.num}
                  onChange={e => setValues({ ...values, num: e.target.value })} />
              </div>
            </div>
            <div className="row p-0 m-0 py-2">
              <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                <label for="totalcount" className="p-0 m-0 my-auto" >உடன் வந்திருப்போர் எண்ணிக்கை :</label>
              </div>
              <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0 ">

                <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="totalcount" value={values.totalcount}
                  onChange={e => setValues({ ...values, totalcount: e.target.value })} />
              </div>
            </div>
            <div className="row p-0 m-0 py-2">
              <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                <label for="feedback" className="p-0 m-0 my-auto" >Feedback :</label>
              </div>
              <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="feedback" value={values.feedback}
                  onChange={e => setValues({ ...values, feedback: e.target.value })} />
              </div>
            </div>

            {/* photo */}
            {/* <div className="row py-1 pt-4 m-0">
              <div className="col-12 p-0 m-0 w-100 text-center border border-3 border-secondary rounded-5 my-auto py-1">
                <img alt="preview" src="assets/img/custom-img/upload.png" className="w-25 h-75 p-0 m-0 px-4 float-start border-end border-5 border-secondary rounded-3" />
                <label htmlFor="file-upload" className={`file-label my-2 ${selectedFile ? 'file-selected' : ''}`}>
                  {selectedFile ? selectedFile : 'Upload Photo'}
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="filetype m-0 p-0"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div> */}

            {/* Guest */}
            <div className="row pe-1 pt-3">
              <div className="col-12 text-end">
                <p className=""></p>
                <p>Guest Signature</p>
              </div>
            </div>

            {/*  EB  */}
          </div>

          {/* body-2 */}
          <div className="body-2 border-5 border-top border-4 border-dark rounded-3 ">
            <div className="container">
              <div className="row py-2 pt-3">
                <div className="col-md-12 col-sm-12 text-center p-0">
                  <p className="bg-secondary w-50 mx-auto rounded-5 fw-bold text-white p-1 fs-6"> For Office Use</p>
                </div>
              </div>

              <div className="row p-0 m-0 pt-2 pb-4">
                <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                  <label for="associatename" className="p-0 m-0 my-auto" >Associate Name :</label>
                </div>
                <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                  <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="associatename" value={values.associateName}
                  onChange={e => setValues({ ...values, associateName: e.target.value })} />
                </div>
              </div>

              <div className="row p-0 m-0 pb-4">
                <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                  <label for="teavelsname" className="p-0 m-0 my-auto" >Travels Name & Number :</label>
                </div>
                <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                  <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="teavelsname" value={values.travelName}
                  onChange={e => setValues({ ...values, travelName: e.target.value })} />
                </div>
              </div>

              <div className="row p-0 m-0 pb-4">
                <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                  <label for="drmob" className="p-0 m-0 my-auto" >Driver Mobile No :</label>
                </div>
                <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                  <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="drmob" value={values.drMob}
                  onChange={e => setValues({ ...values, drMob: e.target.value })} />
                </div>
              </div>

              <div className="row p-0 m-0 pb-4">
                <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                  <label for="kmdetails" className="p-0 m-0 my-auto" >K.M. Details :</label>
                </div>
                <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                  <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="kmdetails" value={values.kmDetails}
                  onChange={e => setValues({ ...values, kmDetails: e.target.value })} />
                </div>
              </div>

              <div className="row p-0 m-0 pb-4">
                <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                  <label for="associatedirname" className="p-0 m-0 my-auto" >Associate Director Name:</label>
                </div>
                <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                  <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="associatedirname" value={values.associateDirectorName}
                  onChange={e => setValues({ ...values, associateDirectorName: e.target.value })} />
                </div>
              </div>

              <div className="row p-0 m-0 pb-4">
                <div className="col-md-4 col-xs-4 col-sm-4 col-4 my-auto p-0 m-0">
                  <label for="associatedirsign" className="p-0 m-0 my-auto" >Associate Director Sign :</label>
                </div>
                <div className="p-0 my-auto col-md-8 col-xs-8 col-sm-8 col-8 m-0">

                  <input type="text" className="m-0 p-0 form-control form-input h-auto w-100" id="associatedirsign" value={values.associateDirectorSign}
                  onChange={e => setValues({ ...values, associateDirectorSign: e.target.value })} />
                </div>
              </div>

              <div className="row">
                <div className="col-12 text-end">
                  <p>Associate Partner Sign</p>
                </div>
              </div>

            </div>
          </div>
          {/* submit button */}
          <div className="row py-2">
            <button className="btn btn-success w-50 mx-auto">Submit</button>
          </div>

        </form>

      </div>

    </>
  );
}

export default UserForm;
