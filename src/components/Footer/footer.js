import React from 'react'

const Footer = ()=> {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2 bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <p className="mb-0 text-white text-center">&copy;{year} . All copyright reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;