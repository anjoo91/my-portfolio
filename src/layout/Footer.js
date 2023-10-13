import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="footer">
                <div className="container">
                    <div className="footer-info">
                        <div className="footer-avatar">
                            <Image src="/assets/img/personal/Logo.PNG" alt="footer-logo" width={200} height={200} />
                        </div>
                        <h6>Let{"'"}s Keep In Touch</h6>
                    </div>
                    <ul className="nav social-link">
                        <li>
                            <a href="https://github.com/anjoo91/"><i className="fab fa-github" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/andrewlew91/"><i className="fab fa-linkedin-in" /></a>
                        </li>
                        <li>
                            <a href="mailto: andrew.w.lew@gmail.com"><i className="fa fa-envelope" /></a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1vDpnvYRJcrq722W4tzQFdgr9qb6Lbu1k/view?usp=drive_link"><i className="fa-solid fa-file-pdf" /></a>
                        </li>
                    </ul>
                    <p className="copyright">© 2023 copyright all right reserved</p>
                </div>
            </div>
            {/* End Footer */}
        </>
    )
}
