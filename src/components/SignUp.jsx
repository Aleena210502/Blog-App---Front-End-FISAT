import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {

  const [input,setInput]=new useState(
    {"name":"", "phone":"","email":"","password":"","cnfPass":""}
  )
  const inputHandler=(event)=>{
setInput({...input,[event.target.name]:event.target.value})    
  }


  const readValues=()=>{
    if (input.password==input.cnfPass) {
      

      let newInput ={"name":input.name, "phone":input.phone,"email":input.email,"password":input.password}
      
axios.post("http://localhost:3030/signUp",newInput).then(
  (response)=>{
    console.log(response.data)

    if (response.data.status=="success") {
      alert("Registered Successfully")
      setInput({"name":"", "phone":"","email":"","password":"","cnfPass":""})
      
    } else {
      alert("Email Id already Exist")
      setInput({"name":"", "phone":"","email":"","password":"","cnfPass":""})
      
    }
    
  }
).catch(
  (error)=>{
    console.log(error)
  }
)   

    } else {
      alert("Password and Confirm Password doesn't Match")
      
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="label form-label">Name</div>
                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>


              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="label form-label">Phone</div>
                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="label form-label">Email Id</div>
                <input type="text" className="form-control"  name='email' value={input.email} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="label form-label">Password</div>
                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="label form-label">Confirm Password</div>
                <input type="password" className="form-control" name='cnfPass' value={input.cnfPass} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValues} className="btn btn-success">Register</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <a href="" className="btn btn-primary">Back to Login</a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp