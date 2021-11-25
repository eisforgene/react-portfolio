import React from 'react'

function Footer() {
    return (
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    {/* <!-- Footer Location--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Los Angeles, California
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">On The Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="mailto: ieugenelee@gmail.com"><i class="fab far fa-envelope"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/eugene-lee-1777b0132/"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/eisforgene"><i class="fab fa-github"></i></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">Thank You!</h4>
                        <p class="lead mb-0">
                            Please reach out if you have any questions!
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
