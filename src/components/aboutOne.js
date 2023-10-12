import React from 'react'
import { useEffect } from "react";
import { activeSkillProgress } from "../utility";
export default function AboutOne() {
    useEffect(() => {
        window.addEventListener("scroll", activeSkillProgress);
      });
  return (
    <>
        <div className="container">
            <div className="about-me">
              <div className="row align-items-start">
                <div className="col-lg-5 pb-4 pb-lg-0">
                  <div className="title-01">
                    <span>About Me</span>
                  </div>
                  <div className="about-me-text pb-5">
                    <h3>My Name Is Andrew Lew</h3>
                    <h5><span>I Am Available</span> For Software Development & Data Science Positions & Projects</h5>
                    <p>Born in 1991, living in USA. I provide database design for websites and apps, as well as front and back-end implementation.</p>
                    <div className="row pt-2">
                      <div className="col-auto">
                        <div className="a-count">
                          <span className="count">5</span>
                          <div className="a-count-text">Projects <br />Completed.</div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="a-count">
                          <span className="count">1</span>
                          <div className="a-count-text">Projects <br />In Progress.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="title-01 mt-5">
                    <span>Experience</span>
                  </div>
                  <div className="resume-box">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-briefcase" />
                        </div>
                        <span className="time">2020 - 2023</span>
                        <h5>Clinical Analytics Manager - Capital Rx</h5>
                        <p>Leveraged Python, SQL, and data science to generate over $50 million in revenue, streamline team workflows, and drive a 4% improvement in clinical outcomes, while also developing data pipelines and strategies that brought efficiencies across departments.</p>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-briefcase" />
                        </div>
                        <span className="time">2017 - 2020</span>
                        <h5>City Research Scientist - New York City Department of Health & Mental Hygiene</h5>
                        <p>Revamped organizational reporting through a centralized Python and SQL data layer, engineered real-time data solutions for public emergencies, and automated dashboards for food safety oversight, effectively transitioning from ad-hoc analyses to automated data-driven decision-making across multiple programs.</p>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-briefcase" />
                        </div>
                        <span className="time">2016 - 2017</span>
                        <h5>Operations Data Analyst - Felix Advertisement</h5>
                        <p>Specialized in optimizing operational efficiency through advanced data analytics, using tools like SQL and Python to provide real-time insights that inform strategic decisions, improve workflows, and drive business performance.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 sticky-lg-top ps-xl-5">
                  <div className="row align-items-start">
                    <div className="col-md-7 py-4">
                      <div className="about-me-img">
                        <img src="assets/img/personal/japan_shirt_me.jpg" alt="japan_avatar" />
                      </div>
                    </div>
                    <div className="col-md-5 py-4">
                      <div className="about-content">
                        <ul>
                          <li>
                            <div className="a-icon">
                              <i className="fab fa-linkedin-in" />
                            </div>
                            <div className="a-text">
                              <a className="text-reset stretched-link" href="https://www.linkedin.com/in/andrewlew91/">Connect With Me</a>
                            </div>
                          </li>
                          <li>
                            <div className="a-icon">
                              <i className="fa fa-envelope" />
                            </div>
                            <div className="a-text">
                              <a className="text-reset stretched-link" href="mailto: andrew.w.lew@gmail.com">Email Me</a>
                            </div>
                          </li>
                          <li>
                            <div className="a-icon">
                              <i className="fab fa-github" />
                            </div>
                            <div className="a-text">
                              <a className="text-reset stretched-link" href="https://github.com/anjoo91">Collaborate With Me</a>
                            </div>
                          </li>
                          <li>
                            <div className="a-icon">
                              <i className="fa-solid fa-file-pdf" />
                            </div>
                            <div className="a-text">
                              <a className="text-reset stretched-link" href="https://drive.google.com/file/d/1vDpnvYRJcrq722W4tzQFdgr9qb6Lbu1k/view?usp=drive_link">See My Resume</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 py-4">
                      <div className="title-01">
                        <span>Skills</span>
                      </div>
                      <div className="skills">
                        <div className="skill-lt" data-value={75}>
                          <h6 className="dark-color">Python</h6>
                          <div className="skill-bar">
                            <div className="skill-bar-in">
                              <span>75%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt" data-value={75}>
                          <h6 className="dark-color">Django</h6>
                          <div className="skill-bar">
                            <div className="skill-bar-in">
                              <span>75%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt" data-value={65}>
                          <h6 className="dark-color">JavaScript</h6>
                          <div className="skill-bar">
                            <div className="skill-bar-in">
                              <span>65%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-lt" data-value={85}>
                          <h6 className="dark-color">SQL</h6>
                          <div className="skill-bar">
                            <div className="skill-bar-in">
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
