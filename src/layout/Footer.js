import React from 'react'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="footer">
                <div className="container">
                    <div className="footer-info">
                        <div className="footer-avatar">
                            <img src="assets/img/personal/Logo.PNG" alt="footer-logo" />
                        </div>
                        <h6>Let's Keep In Touch</h6>
                    </div>
                    <ul className="nav social-link">
                        <li>
                            <a href="https://github.com/anjoo91/"><i className="fab fa-github" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/andrewlew91/"><i className="fab fa-linkedin-in" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-stack-overflow" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-strava" /></a>
                        </li>
                    </ul>
                    <p className="copyright">© 2023 copyright all right reserved</p>
                </div>
            </div>
            {/* End Footer */}
        </>
    )
}
