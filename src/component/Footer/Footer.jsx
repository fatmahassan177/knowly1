import React from "react";
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <>
            <footer className="footer text-light py-4 w-100">
                <div className="container">
              
                    <div className="row">
                   
                        <div className="col-md-4">
                       
                      <h5 className="fs-2 fw-bold">Knowly</h5>    
                            <hr />
                            <ul className="">
                                <li><a href="#" className="text-light fs-5 fw-medium">About</a></li>
                                <li><a href="#" className="text-light fs-5 fw-medium">Careers</a></li>
                                <li><a href="#" className="text-light fs-5 fw-medium">Contact us</a></li>
                                
                            </ul>
                        </div>

                        <div className="col-md-4 mt-3">
                            <h5 className="fs-5 fw-bold">Community</h5>
                            <hr />
                            <ul className="">
                                <li><a href="#" className="text-light fs-5 fw-medium">Learners
                                </a></li>
                                <li><a href="#" className="text-light fs-5 fw-medium">Partners</a></li>
                                <li><a href="#" className="text-light fs-5 fw-medium">Blog</a></li>
                               
                            </ul>
                        </div>

                        <div className="col-md-4 mt-3">
                            <h5 className="fs-5 fw-bold">More</h5>
                            <hr />
                            <ul>
                                <li><a href="#" className="text-light fs-5 fw-medium">Terms</a></li>
                                <li><a href="#" className="text-light fs-5 fw-medium">Privacy</a></li>
                                <li><a href="#" className="text-light fs-5 fw-medium">Help</a></li>
                               
                            </ul>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="text-center mt-4">
                        <div className="d-flex justify-content-center">
                            <a href="https://facebook.com" target="_blank" className="text-light mx-2 social-icon">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="text-light mx-2 social-icon">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" className="text-light mx-2 social-icon">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" className="text-light mx-2 social-icon">
                                <i className="fab fa-youtube fa-lg"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" className="text-light mx-2 social-icon">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                        <p className="mt-3 fs-5 fw-bold">&copy; Knowly .2024</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
