import React, { useEffect, useState } from 'react'
import { scroll_, stickyNav } from '../utility'

export default function Header3({switcherBtn}) {
    useEffect(() => {
        window.addEventListener("scroll", stickyNav);
        window.addEventListener("scroll", scroll_);
        // default theme is dark
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
    });

    const [openMenu, setOpenMenu] = useState(false)
    const [dropdownShow, setDropdownShow] = useState(false)
    const Switcher = (style) => {
        document.querySelector("html").setAttribute("data-bs-theme", style);
    }
    return (
        <>
            {/* Header Top */}
            <header className="main-header d-lg-none">
                <div className="container">
                    {/* Brand */}
                    <div className="logo">
                        <a className="navbar-brand" href="#">
                            {/* <img className="logo-dark" alt="logo" src="assets/img/logo.svg" />
                            <img className="logo-light" alt="light logo" src="assets/img/logo-light.svg" /> */}
                        </a>
                    </div>
                    <div className="ms-auto">
                        <button className="toggler-menu" onClick={() => setOpenMenu(!openMenu)}>
                            <span />
                        </button>
                    </div>
                </div>
            </header>
            {/* End Header Top */}
            <div className={`header-left-fixed one-page-nav ${openMenu ? "menu-open" : ""}`} >
                {/* Brand */}
                <div className="logo">
                    {/* <a className="navbar-brand" href="#">
                        <img className="logo-dark" alt="title" src="assets/img/logo.svg" />
                        <img className="logo-light" alt="title" src="assets/img/logo-light.svg" />
                    </a> */}
                </div>
                {/* / */}
                <ul className="main-menu">
                    <li className="active">
                        <a data-scroll-nav={0} href="#home">
                            <span className="m-icon">
                                <i className="bi-house-door" />
                            </span>
                            <span className="m-text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a data-scroll-nav={1} href="#about">
                            <span className="m-icon">
                                <i className="bi-person" />
                            </span>
                            <span className="m-text">About</span>
                        </a>
                    </li>
                    {/* <li>
                        <a data-scroll-nav={2} href="#services">
                            <span className="m-icon">
                                <i className="bi-briefcase" />
                            </span>
                            <span className="m-text">Services</span>
                        </a>
                    </li> */}
                    <li>
                        <a data-scroll-nav={3} href="#portfolio">
                            <span className="m-icon">
                                <i className="bi-columns" />
                            </span>
                            <span className="m-text">Portfolio</span>
                        </a>
                    </li>
                    {/* <li>
                        <a data-scroll-nav={4} href="#contactus">
                            <span className="m-icon">
                                <i className="bi-telephone" />
                            </span>
                            <span className="m-text">Contact</span>
                        </a>
                    </li> */}
                </ul>
                {/* Top Menu */}
                <div className={`theme-btn dropdown ${!switcherBtn ? "d-none": ""}`}>
                    <button onClick={() => setDropdownShow(!dropdownShow)} className={`btn dropdown-toggle ${dropdownShow ? "show" : ""}`} id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
                        <span className="bi my-1 theme-icon-active">
                            <i className="bi-circle-half" />
                        </span>
                    </button>
                    <ul className={`dropdown-menu dropdown-menu-end ${dropdownShow ? "show" : ""}`} aria-labelledby="bd-theme" style={{ bsDropdownMinWidth: '8rem' }}>
                        <li>
                            <button onClick={() => Switcher("light")} type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
                                <span className="bi me-2 opacity-50 theme-icon">
                                    <i className="bi-sun-fill" />
                                </span>
                                Light
                                <span className="bi ms-auto d-none">
                                    <i className="bi-check2" />
                                </span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => Switcher("dark")} type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
                                <span className="bi me-2 opacity-50 theme-icon">
                                    <i className="bi-moon-stars-fill" />
                                </span>
                                Dark
                                <span className="bi ms-auto d-none">
                                    <i className="bi-check2" />
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* / */}
            </div>

        </>
    )
}
