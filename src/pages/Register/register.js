import React, { useState } from 'react'

const initializeState = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

const Register = () => {
  const [state, setState]= useState(initializeState)

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("State=>", state)
  }

  const handleChange = (e)=>{
    setState({...state, [e.target.name]: e.target.value })
  }

  return (
    <div className="py-5">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="card p-2 p-md-3 p-lg-4">
                    <h2 className="text-center text-dark mb-4">Register Form</h2>
                    <form>
                        <div className="row">
                            <div className="col-12 col-md-6 mb-3">
                                <input type="text" name='firstname' placeholder='Enter Your First Name' className='form-control' onChange={handleChange} />
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <input type="text" name='lastname' placeholder='Enter Your Last Name' className='form-control' onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="email" name='email' placeholder='Enter Your Email' className='form-control' onChange={handleChange}  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="password" name='password' placeholder='Enter Your Password' className='form-control' onChange={handleChange}  />
                            </div>
                        </div>
                    </form>
                    <div className="row mb-3">
                        <div className="col text-center">
                            <button  className='btn btn-success w-100' onClick={handleSubmit}>Register Here</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register