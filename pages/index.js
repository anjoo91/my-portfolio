import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Layout3 from '../src/layout/Layout3'
import HomeThree from "../src/components/homeThree";
import AboutOne from '../src/components/aboutOne';
import ServiceOne from '../src/components/serviceOne';
import PortfolioOne from '../src/components/portfolioOne';
import TestimonialOne from '../src/components/testimonialOne';
import ContactOne from "../src/components/contactOne";

export default function Home() {
  return (
    <Layout3 switcherBtn>
      {/* Home */}
      <HomeThree />
      {/* End Home */}
      {/* About */}
      <section id="about" data-scroll-index={1} className="section about-section gray-bg-1">
        <AboutOne />
      </section>
      {/* End About */}
      {/* Services */}
      {/* <section id="services" data-scroll-index={2} className="section services-section">
        <ServiceOne />
      </section> */}
      {/* End Services */}
      {/* portfolio */}
      <section id="portfolio" data-scroll-index={3} className="section portfolio-section gray-bg-1">
        <PortfolioOne />
      </section>
      {/* End portfolio */}
      {/* Testimonials */}
      {/* <section className="section testimonials-section">
        <TestimonialOne />
      </section> */}
      {/* End Testimonials */}
      {/* contactus */}
      {/* <section id="contactus" data-scroll-index={4} className="section contactus-section gray-bg-1">
        <ContactOne />
      </section> */}
      {/* End contactus */}
    </Layout3>
  )
}
