import React from 'react'

function About() {
    return (
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">Hello! I'm an Entry Level Full Stack Developer with a passion for coding. I received a Certificate of Completion from The Coding Bootcamp at UCLA Extension.</p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">My previous experience is in Management, specifically in specialty coffee and retail for 10+ years. I've led teams of up to 100+ employees and came to realize I love service and working with people.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                {/* <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i class="fas fa-download me-2"></i>
                        Free Download!
                    </a>
                </div> */}
            </div>
        </section>
    )
}

export default About
