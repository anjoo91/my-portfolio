import React from 'react'
import { TypeWriter } from './../plugin/type-writer';

export default function HomeThree() {
  return (
    <>
      <div>
        <div className="bg-effect-img" style={{ backgroundImage: 'url(assets/img/bg-effect-1.png)' }}>
          <div className="marquee">
            <h2>Andrew Lew Andrew Lew</h2> <h2>Andrew Lew Andrew Lew</h2>
          </div>
        </div>
        {/* Home */}
        <section id="home" data-scroll-index={0} className="home-section-03">
          <div className="container position-relative">
            <div className="row align-items-center min-vh-100 justify-content-center">
              <div className="col-lg-6">
                <div className="home-image">
                  <div className="home-image-in">
                    <img src="assets/img/personal/avatar_me.jpg" alt="avatar" />
                  </div>
                </div>
                <div className="home-intro">
                  <h1>Andrew Lew</h1>
                  <h2>I{"'"}m a Developer & Data Scientist<span id="type-it" /></h2>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  )
}
