import React from 'react'

export default function Price() {
  return (
    <>
        <div className="price-area bg-price pt-100 pb-70">
            <div className="container">
                <div className="section-title text-center">
                    <span>Pricing Table</span>
                    <h2>We Have Pre-ready Pricing for Our Services</h2>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-12 pt-45">
                        <div className="tabs-item-list">
                        <ul id="tabs-item" className="text-center">
                            <li className="active">
                            <a href="#monthly" className="prices-tab">Monthly</a>
                            </li>
                            <li>
                            <a href="#yearly" className="prices-tab">Yearly</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div id="prices-content">
                    <div id="monthly" className="active prices-content-area animated">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-price">
                                    <span>Basic Plan</span>
                                    <div className="single-price-title">
                                        <h2><sup>$</sup>30<sub>/month</sub></h2>
                                    </div>
                                    <ul>
                                        <li>Data Analysis</li>
                                        <li>Website Building</li>
                                        <li>Web Application</li>
                                        <li className="color-gray">SEO Optimizing</li>
                                        <li className="color-gray">Content Marketing</li>
                                        <li className="color-gray">Social Marketing</li>
                                    </ul>
                                    <a href="#" className="get-btn">Get Stated</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-price current">
                                    <span>Standard Plan</span>
                                    <div className="single-price-title">
                                        <h2><sup>$</sup>60<sub>/month</sub></h2>
                                    </div>
                                    <ul>
                                        <li>Data Analysis</li>
                                        <li>Website Building</li>
                                        <li>Web Application</li>
                                        <li>SEO Optimizing</li>
                                        <li className="color-gray">Content Marketing</li>
                                        <li className="color-gray">Social Marketing</li>
                                    </ul>
                                    <a href="#" className="get-btn">Get Stated</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                                <div className="single-price">
                                    <span>Premium Plan</span>
                                    <div className="single-price-title">
                                        <h2><sup>$</sup>90<sub>/month</sub></h2>
                                    </div>
                                    <ul>
                                        <li>Data Analysis</li>
                                        <li>Website Building</li>
                                        <li>Web Application</li>
                                        <li>SEO Optimizing</li>
                                        <li>Content Marketing</li>
                                        <li>Social Marketing</li>
                                    </ul>
                                    <a href="#" className="get-btn">Get Stated</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="yearly" className="animated prices-content-area">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-price">
                                    <span>Basic Plan</span>
                                    <div className="single-price-title">
                                        <h2><sup>$</sup>70<sub>/Year</sub></h2>
                                    </div>
                                    <ul>
                                        <li>Data Analysis</li>
                                        <li>Website Building</li>
                                        <li>Web Application</li>
                                        <li className="color-gray">SEO Optimizing</li>
                                        <li className="color-gray">Content Marketing</li>
                                        <li className="color-gray">Social Marketing</li>
                                    </ul>
                                    <a href="#" className="get-btn">Get Stated</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-price current">
                                    <span>Standard Plan</span>
                                    <div className="single-price-title">
                                        <h2><sup>$</sup>120<sub>/Year</sub></h2>
                                    </div>
                                    <ul>
                                        <li>Data Analysis</li>
                                        <li>Website Building</li>
                                        <li>Web Application</li>
                                        <li>SEO Optimizing</li>
                                        <li className="color-gray">Content Marketing</li>
                                        <li className="color-gray">Social Marketing</li>
                                    </ul>
                                    <a href="#" className="get-btn">Get Stated</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                                <div className="single-price">
                                    <span>Premium Plan</span>
                                    <div className="single-price-title">
                                        <h2><sup>$</sup>170<sub>/Year</sub></h2>
                                    </div>
                                    <ul>
                                        <li>Data Analysis</li>
                                        <li>Website Building</li>
                                        <li>Web Application</li>
                                        <li>SEO Optimizing</li>
                                        <li>Content Marketing</li>
                                        <li>Social Marketing</li>
                                    </ul>
                                    <a href="#" className="get-btn">Get Stated</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
