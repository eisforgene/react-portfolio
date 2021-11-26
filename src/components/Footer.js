import React from 'react'

function Footer() {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Los Angeles, California
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">On The Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="mailto: ieugenelee@gmail.com"><i className="fab far fa-envelope"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/eugene-lee-1777b0132/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/eisforgene"><i className="fab fa-github"></i></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Thank You!</h4>
                        <p className="lead mb-0">
                            Please reach out if you have any questions!
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
