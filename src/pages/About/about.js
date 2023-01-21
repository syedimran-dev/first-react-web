import React from 'react'

const About = () => {
    const style = {
        width: '100%'
    }
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>About Us</h1>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md align-items-center d-flex">
                        <h1>I'm Muhammad Imran and I'm React App Developer </h1>
                    </div>
                    <div className="col-md img w-100">
                        <img style={style}  src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About