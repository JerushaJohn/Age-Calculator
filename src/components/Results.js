import {React , useEffect} from "react";


function Results({ date }) {
  let today = new Date().getTime();
  let birthdate = new Date(date).getTime();
  let d = Math.abs(today - birthdate);
  let days = Math.floor(d / (1000 * 60 * 60 * 24));
  
  let years = Math.floor(days / 365);
  days -= years * 365;

  let months = Math.floor(days / 31);
  days -= months * 31;

  useEffect(()=>{
    if (today < birthdate) {
        alert("You selected future Date as your birthday");
      }
  },[date])

  
  
  return (
    <div className="Stats   border">
      <div className="card">
        <div className="card-body">
          <div align="center">
            Age in Years:
            <br />
          <p>  {years} Years</p>
          </div>
         </div> 
      </div>
    </div>
  );
}
export default Results;