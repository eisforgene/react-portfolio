import React from 'react'

function Project() {
    return (
<section class="page-section portfolio" id="portfolio">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto">
                            <a class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" href="http://project-toilet.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <div class="portfolio-item-caption-content text-center text-white btn"><i class="far fa-hand-point-up"></i></div>
                            </a>
                            <img class="img-fluid" src="build/assets/img/portfolio/toilet-sos.png" alt="..."/>
                            <h5 class="h5 text-black text-center">Toilet SOS</h5>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto">
                            <a class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" href="https://sleepy-sierra-14860.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="far fa-hand-point-up"></i></div>
                            </a>
                            <img class="img-fluid" src="build/assets/img/portfolio/note-taker.png" alt="..." />
                            <h5 class="h5 text-black text-center">Note Taker</h5>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto">
                            <a class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" href="https://venue-covid-tracker.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="far fa-hand-point-up"></i></div>
                            </a>
                            <img class="img-fluid" src="build/assets/img/portfolio/covid-app.png" alt="..." />
                            <h5 class="h5 text-black text-center">Covid Venue Tracker</h5>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto">
                            <a class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" href="https://github.com/eisforgene/social-network-api" target="_blank" rel="noopener noreferrer">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="far fa-hand-point-up"></i></div>
                            </a>
                            <img class="img-fluid" src="build/assets/img/portfolio/social-network.png" alt="..." />
                            <h5 class="h5 text-black text-center">Social Network API</h5>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto">
                            <a class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" href="https://eisforgene.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="far fa-hand-point-up"></i></div>
                            </a>
                            <img class="img-fluid" src="build/assets/img/portfolio/weather-dashboard.png" alt="..." />
                            <h5 class="h5 text-black text-center">Weather Dashboard</h5>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto">
                            <a class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" href="https://boiling-stream-08872.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="far fa-hand-point-up"></i></div>
                            </a>
                            <img class="img-fluid" src="build/assets/img/portfolio/budget-tracker.png" alt="..." />
                            <h5 class="h5 text-black text-center">Budget Tracker</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
