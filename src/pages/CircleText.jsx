import React from 'react';
import { Link, Element } from 'react-scroll';  // react-scroll에서 제공하는 Link와 Element 컴포넌트
import About from './About'; // About 컴포넌트 임포트
import Portfolio from './Portfolio'; // Portfolio 컴포넌트 임포트
import Contact from './Contact'; // Contact 컴포넌트 임포트

const CircleToText = () => {
  return (
    <>
      <div className="navbar">
        {/* 내비게이션 링크 (각 섹션으로 이동) */}
        <Link to="about-section" smooth={true} duration={500}>About</Link>
        <Link to="portfolio-section" smooth={true} duration={500}>Portfolio</Link>
        <Link to="contact-section" smooth={true} duration={500}>Contact</Link>
      </div>

      <Element name="about-section">
        <About />  {/* About 섹션 */}
      </Element>

      <Element name="portfolio-section">
        <Portfolio />  {/* Portfolio 섹션 */}
      </Element>

      <Element name="contact-section">
        <Contact />  {/* Contact 섹션 */}
      </Element>
    </>
  );
}

export default CircleToText;
