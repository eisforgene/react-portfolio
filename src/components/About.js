import React from 'react'

function About() {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">Hello! I'm an Entry Level Full Stack Developer with a passion for coding. I received a Certificate of Completion from The Coding Bootcamp at UCLA Extension.</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">My previous experience is in Management, specifically in specialty coffee and retail for 10+ years. I've led teams of up to 100+ employees and came to realize I love service and working with people.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                {/* <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download me-2"></i>
                        Free Download!
                    </a>
                </div> */}
            </div>
        </section>
    )
}

export default About
