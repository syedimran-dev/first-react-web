import React, { useState } from 'react'

const Login = () => {

    const [userName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
    const[count, setCount] =  useState(5)
    const countIncreament = ()=>{
        setCount(count + 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName)
        console.log(Password)
       
        if(Password.length < 8){
            alert("password is too Short")
        }
    }
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="card p-2 p-md-3 p-lg-4">
                            <h2 className="text-center text-dark mb-4">Login Form</h2>
                            <h4>Username: {userName}</h4>
                            <h4>Password: {Password}</h4>
                            <h4>Count: {count}</h4>
                            <form>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="text" placeholder='Enter Your Username' className='form-control' onChange={(e) => { setUserName(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="password" placeholder='Enter Your Password' className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                </div>
                            </form>
                            <div className="row mb-3">
                                <div className="col text-center">
                                    <button onClick={handleSubmit} className='btn btn-success w-100'>Login Here</button>
                                </div>
                                <div className="col text-center">
                                    <button className='btn btn-success w-100' onClick={countIncreament}>Increament</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login