import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const CreatePost = () => {

  const [token,setToken]=useState(sessionStorage.getItem("token"))

  const [input,setInput]=useState(
    {"Message":""}
  )

  const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

  const readValues=()=>{
    console.log(input)
    console.log(token)
    axios.post("http://localhost:3030/create",input, {
      headers:{"token":token,"Content-Type":"application/json"}
    }).then(
      (response)=>{
        console.log(response.data)

if (response.data.status=="success") {
  alert("Posted Successfully")
  
} else {
  alert("Something went Wrong !!! ")
  
}

      }
    ).catch(
      (error)=>(console.log(error))
    )
  }


  return (
    <div>
      <NavBar/>

  <div className="container">
    <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="label form-label">Post a Message</div>
            <textarea name="Message" value={input.Message} className="form-control" onChange={inputHandler}></textarea>
            


          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button onClick={readValues} className="btn btn-success">Post</button>

          </div>
        </div>


      </div>
    </div>
  </div>


    </div>
  )
}

export default CreatePost