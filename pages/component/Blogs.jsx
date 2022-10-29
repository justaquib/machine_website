import React from 'react'

export default function Blogs() {
  return (
    <>
        <div className="blog-area pb-70">
            <div className="container">
                <div className="section-title text-center">
                    <span>Blogs</span>
                    <h2>Our Latest Post</h2>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="row pt-45">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-card">
                            <div className="blog-img">
                                <a href="#blog-details">
                                <img src="images/1_1.jpg" alt="Blog Images"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-tag">
                                <a href="#"><span>Basics</span></a>
                                </div>
                                <a href="#blog-details">
                                <h3>Basic Guidline Layout for Zero Bigenner Level</h3>
                                </a>
                                <a href="#blog-details" className="read-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-card">
                            <div className="blog-img">
                                <a href="#blog-details">
                                <img src="images/2_1.jpg" alt="Blog Images"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-tag">
                                <a href="#"><span>Marketing</span></a>
                                </div>
                                <a href="#blog-details">
                                <h3>How to Become Most Skilled Person in Market</h3>
                                </a>
                                <a href="#blog-details" className="read-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="blog-card">
                            <div className="blog-img">
                                <a href="#blog-details">
                                <img src="images/3_2.jpg" alt="Blog Images"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-tag">
                                <a href="#"><span>Data Research</span></a>
                                </div>
                                <a href="#blog-details">
                                <h3>Basic Guidline Layout for Analytical Analysis</h3>
                                </a>
                                <a href="#blog-details" className="read-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
