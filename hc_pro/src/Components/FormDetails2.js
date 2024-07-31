import React from "react";
import { Link } from "react-router-dom";

function FormDetails2(){
    return(
        <>
                  {/* Back Button */}
                  <div className="back-button me-2">
            <Link to="/Home"><i className="ti ti-arrow-left"></i></Link>
          </div>
        <div className="row">
            {/* col-1 */}
           <div className="col-6">
               
           </div>
           {/* col-2 */}
           <div className="col-6">

           </div>
        </div>
        </>
    )
}
export default FormDetails2;