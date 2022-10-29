import React from 'react'

export default function Portfolio() {
  return (
    <>
        <section className="portfolio-area pt-100 pb-70">
            <div className="container">
                <div className="section-title text-center">
                    <span>Our Portfolio</span>
                    <h2>We Have Done Business with Thousand of Comapnies</h2>
                    <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="row pt-45">
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                            <a href="#portfolio">
                                <img src="images/1_2.jpg" alt="Portfolio Images"/>
                            </a>
                            <div className="portfolio-tag">
                                <a href="#"><span>Marketing</span></a>
                            </div>
                            <div className="portfolio-content">
                                <a href="#portfolio"><h3>Social Marketing</h3></a>
                                <i className="bx bxs-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                            <a href="#portfolio">
                                <img src="images/2_2.jpg" alt="Portfolio Images"/>
                            </a>
                            <div className="portfolio-tag">
                                <a href="#"><span>Research</span></a>
                            </div>
                            <div className="portfolio-content">
                                <a href="#portfolio"><h3>Data Analysis</h3></a>
                                <i className="bx bxs-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                            <a href="#portfolio">
                                <img src="images/3_1.jpg" alt="Portfolio Images"/>
                            </a>
                            <div className="portfolio-tag">
                                <a href="#"><span>Optimizing</span></a>
                            </div>
                            <div className="portfolio-content">
                                <a href="#portfolio"><h3>SEO Optimization</h3></a>
                                <i className="bx bxs-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                            <a href="#portfolio">
                                <img src="images/4_1.jpg" alt="Portfolio Images"/>
                            </a>
                            <div className="portfolio-tag">
                                <a href="#"><span>Marketing</span></a>
                            </div>
                            <div className="portfolio-content">
                                <a href="#portfolio"><h3>Content Marketing</h3></a>
                                <i className="bx bxs-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-item">
                        <div className="portfolio-img">
                            <a href="#portfolio">
                                <img src="images/5.jpg" alt="Portfolio Images"/>
                            </a>
                            <div className="portfolio-tag">
                                <a href="#"><span>Development</span></a>
                            </div>
                            <div className="portfolio-content">
                                <a href="#portfolio"><h3>App Development</h3></a>
                                <i className="bx bxs-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-item">
                            <div className="portfolio-img">
                                <a href="#portfolio">
                                    <img src="images/6.jpg" alt="Portfolio Images"/>
                                </a>
                                <div className="portfolio-tag">
                                    <a href="#"><span>Development</span></a>
                                </div>
                                <div className="portfolio-content">
                                    <a href="#portfolio"><h3>Web Development</h3></a>
                                    <i className="bx bxs-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
