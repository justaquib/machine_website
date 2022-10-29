import React from 'react'

export default function Touch() {
  return (
    <>
        <div className="submission-area ptb-100">
            <div className="container">
                <div className="submission-title">
                    <h2>Get in touch with us</h2>
                </div>
                <form className="submission-form">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="website" placeholder="Your fullname"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="form-group border-line">
                                <input type="text" className="form-control" id="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 offset-md-5 offset-lg-0">
                            <button type="submit" className="default-btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
