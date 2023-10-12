import React from 'react'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="footer">
                <div className="container">
                    <div className="footer-info">
                        <div className="footer-avatar">
                            <img src="assets/img/mask.jpg" alt="title" />
                        </div>
                        <h6>Andrew Lew</h6>
                    </div>
                    <ul className="nav social-link">
                        <li>
                            <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-facebook" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-pinterest" /></a>
                        </li>
                    </ul>
                    <p className="copyright">© 2023 copyright all rights reserved</p>
                </div>
            </div>
            {/* End Footer */}
        </>
    )
}
