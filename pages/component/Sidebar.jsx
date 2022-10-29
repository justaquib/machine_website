import React from 'react'

export default function Sidebar() {
  return (
    <>
        <div className="sidebar-modal">
            <div className="modal right fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <i className="bx bx-x"></i>
                                </span>
                            </button>
                            <h2 className="modal-title" id="myModalLabel2">
                                <a href="index.html">
                                    <img src="images/logo.png" className="modal-logo1" alt="Logo"/>
                                    <img src="images/sticky-logo.png" className="modal-logo2" alt="Logo"/>
                                </a>
                            </h2>
                        </div>
                        <div className="modal-body">
                            <div className="sidebar-modal-widget">
                                <h3 className="title">About Us</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores doloribus eum laboriosam praesentium delectus unde magni aut perspiciatis cumque deserunt dolore voluptate, autem pariatur.</p>
                            </div>
                            <div className="sidebar-modal-widget">
                                <h3 className="title">Contact Info</h3>
                                <ul className="contact-info">
                                <li>
                                <i className="flaticon-pin"></i>
                                    Address
                                    <span>28/A Street, New York, USA</span>
                                </li>
                                <li>
                                    <i className="flaticon-paper-plane"></i>
                                    Email
                                    <span>
                                    <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3f565159507f5d50514c5e115c5052">[email protected]</a>
                                    </span>
                                </li>
                                <li>
                                <i className="flaticon-call"></i>
                                    Phone
                                    <span>+1 123 456 7890, +1 123 454 699</span>
                                </li>
                                </ul>
                            </div>
                            <div className="sidebar-modal-widget">
                                <h3 className="title">Connect With Us</h3>
                                <ul className="social-list">
                                    <li>
                                        <a href="#">
                                        <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="bx bxl-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
