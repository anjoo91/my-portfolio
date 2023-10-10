import React, { useState } from 'react'
import Modal from 'react-modal';
import FsLightbox from "fslightbox-react";

export default function PortfolioOne() {
    // For Modal Box
    const [isOpen1, setIsOpen1] = useState(false);
    const [modalContent, setModalContent] = useState({});

    function toggleModalOne(value) {
        setIsOpen1(!isOpen1);
        setModalContent(value);
    }
    // For Lightbox
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 0
    });

    function openLightboxOnSlide(index) {
        setLightboxController({
          toggler: !lightboxController.toggler,
          slide: index // set the index directly
        });
    }

    const projects = [
        {
            title: "WebNLP",
            subTitle: "Web App, NLP Integration, Data Science, App Design",
            img: ["assets/img/django-nlp/home.PNG",
                "assets/img/django-nlp/regex.PNG",
                "assets/img/django-nlp/lemma.PNG",
                "assets/img/django-nlp/pos.PNG",
                "assets/img/django-nlp/ner.PNG",
                ],
            desc1: "This project integrates Natural Language Processing (NLP) with web development using Django.",
            desc2: "It provides a web interface to perform various NLP tasks such as Regular Expressions, Lemmatization, Part of Speech Tagging, and Named Entity Recognition.",
            type: "Website",
            languages: "HTML, Bootstrap CSS, Python, Django, spaCy, NLP, Heroku",
            platform: "Heroku",
            country: "USA",
            liveURL: "https://django-nlp-fdc565844cf0.herokuapp.com/"


        },
        {
            title: "Wanderlust Travel Planner",
            subTitle: "Web App, App Design, Group Project",
            img: ["assets/img/project4/landing_page.PNG",
                "assets/img/project4/trips_index_page.PNG",
                "assets/img/project4/destinations_index_page.PNG",
                "assets/img/project4/destinations_detail_page.PNG",
                ],
            desc1: "A comprehensive travel planning app that assists users in organizing their upcoming trips by leveraging real-time data and photos.",
            desc2: "The app offers robust user authentication and role-based permissions, allowing users to create trips, add destinations, and invite friends. It enhances user experience by providing features like viewing invites, seeing fellow trip-goers, creating to-do lists, uploading pictures, and offering insights on nearby places, upcoming trips, and countdowns to start dates.",
            type: "Website",
            languages: "HTML, CSS, MaterializeCSS, Python, Django, Google Maps API, Google Places API, AJAX, SQLite3, AWS S3, JWT, Fly.io",
            platform: "Fly.io",
            country: "USA",
            liveURL: "https://ancient-voice-480.fly.dev/"


        },
        {
            title: "OnTime Watch Store Website",
            subTitle: "Web App, App Design, ECommerce",
            img: ["assets/img/project3/landing_page.png",
                "assets/img/project3/product_index_page.png",
                "assets/img/project3/product_create_page.png",
                "assets/img/project3/shopping_cart_page.png",],
            desc1: "This is a SPA (single-page-application) E-Commerce store example built off of Mongoose (MongoDB), Express.js, React.js, and Node.js. AWS S3 is used for hosting image files and JWT is used for authentication.",
            desc2: "This app features secure user authentication, admin-level controls for product management, and a user-friendly interface that includes a rotating banner, product browsing, cart functionalities, a simulated checkout process, and an order history with status tracking.",
            type: "Website",
            languages: "HTML, CSS, JavaScript, NodeJS, Express, MongoDB, Mongoose, AWS S3, JWT, render.com",
            platform: "render.com",
            country: "USA",
            liveURL: "https://ontime-watch-store.onrender.com/"


        },
        {
            title: "Virtual PotLuck",
            subTitle: "Web App, App Design",
            img: ["assets/img/project2/landing_page.png",
                "assets/img/project2/recipe_index_page.png",
                "assets/img/project2/recipe_detail_page.png",
                "assets/img/project2/question_page.png",],
            desc1: "A webapp designed for sharing recipes with other people.",
            desc2: "It allows you to create, read, update, and delete recipes, depending on whether you are the author of the recipe. Recipes allow you to share ingredients, instructions, and a URL to images. You must first log in with Google to utilize the create, update, and delete functions. Read functionality does not require logging in. You may also ask questions on each recipe. You can also edit or delete your questions after creating them. The author of the recipe can provide their answers to these questions. You can also leave a review. Similar to the questions, you can also edit or delete your review after you've created it.",
            type: "Website",
            languages: "HTML, CSS, JS, Express, MongoDB, Mongoose, AWS S3, Passport, Google OAuth, Cyclic",
            platform: "Cyclic",
            country: "USA",
            liveURL: "https://faithful-blue-poncho.cyclic.app/"



        },
        {
            title: "BrickBreaker Game",
            subTitle: "Web App, Game Design",
            img: ["assets/img/project1/landing_page.png",
                "assets/img/project1/game_page.png",
                "assets/img/project1/game_win.png",
                "assets/img/project1/player_scores.png",
                ],
            desc1: "A classic brick-breaking game built with HTML, CSS, & Javascript.",
            desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "Website",
            languages: "HTML, CSS, JS",
            platform: "GitHub Pages",
            country: "USA",
            liveURL: "https://anjoo91.github.io/brick-breaker/"



        },
        {
            title: "Django Bank App",
            subTitle: "Web App, App Design",
            img: ["assets/img/project5/work-in-progress.jpg",
                
                ],
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            type: "Website",
            languages: "PHP, HTML, CSS, JS",
            platform: "Heroku",
            country: "USA",
            liveURL: "www.realsite.com"



        }
    ]
    return (
        <>
            <div className="container">
                <div className="section-heading">
                    <h3>
                        <span>My Portfolio</span>
                    </h3>
                </div>
                <div className="lightbox-gallery">
                    <div className="row g-3 g-lg-4 portfolio-content">
                        {projects.map((data, index) => (
                            <div className="col-sm-6 col-lg-4 grid-item" key={index}>
                                <div className="portfolio-box">
                                    <div className="portfolio-text">
                                        <h6>{data.title}</h6>
                                        <p>{data.subTitle}</p>
                                        <a onClick={() => openLightboxOnSlide(index)} className="gallery-link" href={data.liveURL} target="_blank" re="noopener noreferrer"><i className="bi-arrow-up-right-circle" /></a>
                                    </div>
                                    <div className="portfolio-img" style={{height: '200px', width:'100%'}}>
                                      <img src={Array.isArray(data.img) ? data.img[0] : data.img} style={{ width: '100%', height: 'auto' }} />
                                        <a onClick={() => toggleModalOne(data)} className="px_modal portfolio-modal-link" href="#project_1">
                                            <i className="fa fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <FsLightbox
                            toggler={lightboxController.toggler}
                            sources={projects[lightboxController.slide]?.img || []}
                            slide={1}
                        />
                    </div>
                    {modalContent && (
                        <Modal
                            isOpen={isOpen1}
                            onRequestClose={() => toggleModalOne()}
                            closeTimeoutMS={300}
                            openTimeoutMS={300}
                        >
                            <div id="full_description" className="px-modal">
                                <div className="single-project-box">
                                    <div className="row align-items-start">
                                        <button onClick={toggleModalOne} title="Close (Esc)" type="button" className="mfp-close">×</button>
                                        <div className="col-lg-7">
                                            <div className="row g-2">
                                                {modalContent.img && modalContent.img.map((img, index) => (
                                                    <div className="col-6" key={index}>
                                                        <img className="border" src={img} alt="title" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-5 pt-4 pt-lg-0">
                                            <h4>{modalContent.title}</h4>
                                            <p className="mb-3">{modalContent.desc}</p>
                                            <div className="about-content">
                                                <ul>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Type:</span>
                                                        <span>{modalContent.type}</span>
                                                    </li>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Languages:</span>
                                                        <span>{modalContent.languages}</span>
                                                    </li>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Platform:</span>
                                                        <span>{modalContent.platform}</span>
                                                    </li>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Country:</span>
                                                        <span>{modalContent.country}</span>
                                                    </li>
                                                    <li className="d-flex">
                                                        <span className="col-4 col-lg-3">Live URL:</span>
                                                        <span>{modalContent.liveURL}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </>
    )
}
