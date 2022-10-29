import React from 'react'

export default function Testimonial() {
  return (
    <>
        <div className="client-area pb-70">
            <div className="container-fluid p-0">
                <div className="section-title text-center">
                    <span>Testimonial</span>
                    <h2>Our Clients Feedback</h2>
                    <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="client-slider owl-carousel owl-theme">
                    <div className="client-item">
                        <div className="client-item-img">
                            <img src="images/t1.png" alt="Testimonial Images"/>
                        </div>
                        <h3>John Doe</h3>
                        <p>
                            Restaurants range from inexpensive and informal lunching or dining places
                            catering to people working nearby, with modest food served in simple settings at low prices.
                        </p>
                    </div>
                    <div className="client-item">
                        <div className="client-item-img">
                            <img src="images/t4.png" alt="Testimonial Images"/>
                        </div>
                        <h3>Knot Doe</h3>
                        <p>
                            Restaurants range from inexpensive and informal lunching or dining places
                            catering to people working nearby, with modest food served in simple settings at low prices.
                        </p>
                    </div>
                    <div className="client-item">
                        <div className="client-item-img">
                            <img src="images/t5.png" alt="Testimonial Images"/>
                        </div>
                        <h3>John Smith</h3>
                        <p>
                            Restaurants range from inexpensive and informal lunching or dining places
                            catering to people working nearby, with modest food served in simple settings at low prices.
                        </p>
                    </div>
                    <div className="client-item">
                        <div className="client-item-img">
                            <img src="images/t3.png" alt="Testimonial Images"/>
                        </div>
                        <h3>Evanaa</h3>
                        <p>
                            Restaurants range from inexpensive and informal lunching or dining places
                            catering to people working nearby, with modest food served in simple settings at low prices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
