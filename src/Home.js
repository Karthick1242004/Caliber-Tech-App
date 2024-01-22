import Ho from './Home.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './components/Imagess/clogo.png';
import logo1 from './components/Imagess/astro.png';
import logo2 from './components/Imagess/bins.png';
import logo3 from './components/Imagess/nextjs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [backgroundColor, setBackgroundColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const main4OffsetTop = document.querySelector(`.${Ho.main4}`).offsetTop;
      const main6OffsetTop = document.querySelector(`.${Ho.main6}`).offsetTop;
      const main8OffsetTop = document.querySelector(`.${Ho.main7}`).offsetTop;
      const threshold1 = 500;
      const threshold2 = main4OffsetTop - 500;
      const threshold3 = main6OffsetTop - 500;
      const threshold4 = main8OffsetTop - 500;

      if (scrollPosition > threshold1 && scrollPosition < threshold2) {
        setBackgroundColor('#B5DBCF');
      } else if (scrollPosition > threshold2 && scrollPosition < threshold3) {
        setBackgroundColor('#FBE274');
      } else if (scrollPosition > threshold3 && scrollPosition < threshold4) {
        setBackgroundColor('#BEC7E7');
      } else if (scrollPosition > threshold4) {
        setBackgroundColor('#ffffff');
      } else {
        setBackgroundColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      smooth: true,
      duration: 800,
    });
  };

  return (
    <div className={`${Ho.App} ${Ho.transition}`} style={{ backgroundColor }}>
      <div className={Ho.nav}>
        <img src={logo} alt='Loading!' className={Ho.clog} />
        <h1>Caliber</h1>
        <nav>
          <ScrollLink
            to="main8"
            smooth={true}
            duration={800}
            className={Ho.ln}
            onClick={() => scrollToSection('main8')}
          >
            About Us
          </ScrollLink>
          <ScrollLink  
            to="main5"
            smooth={true}
            duration={800}
            className={Ho.ln}
            onClick={() => scrollToSection('main5')}>
            Services
          </ScrollLink>
          <a href="https://github.com/Karthick1242004" className={Ho.ln}>
            Our Works
          </a>
          <ScrollLink  
            to="main7"
            smooth={true}
            duration={800}
            className={Ho.ln}
            onClick={() => scrollToSection('main7')}>
            Follow Us
          </ScrollLink>
          <ScrollLink 
            to="main8"
            smooth={true}
            duration={800}
            className={Ho.ln}
            onClick={() => scrollToSection('main8')}>
            Contact
          </ScrollLink>
        </nav>
      </div>
      <img src={logo1} className={Ho.log1} alt="logo" />
      <div className={Ho.mainpara}>
        <h1>Your input is our desire,<br />our output is your desire.</h1>
        <p>
          Caliber builds web applications for customers, by using their inputs
          and as well as provides technical support and maintenance to the
          customer's application.
        </p>
      </div>
      <img src={logo2} className={Ho.log2} alt="logo" />

      <div className={Ho.main2}>
        <h1>
          <span1>A trustful <br />service </span1>for<br />customers<br />at
          anytime
        </h1>
        <p>
          Caliber builds web applications for customers using their inputs and
          <br />as well as provides support and maintenance to the customer's
          application.
        </p>
      </div>
      <div className={Ho.main3} data-aos="fade-right">
        <h1>
          <FontAwesomeIcon className={Ho.icn1} icon={faScrewdriverWrench} />
          <br />Tools , frameworks and Languages used in Caliber.
        </h1>
        <div className={Ho.icf}>
          <a href='https://react.dev/'><FontAwesomeIcon className={Ho.icnm1} icon={faReact} /></a>
          <a href='https://nextjs.org/'><img src={logo3} className={Ho.img3} alt="logo" /></a>
          <a href='https://html.com/'><FontAwesomeIcon className={Ho.icnm1} icon={faHtml5} /></a>
          <a href='https://www.css3.com/'><FontAwesomeIcon className={Ho.icnm1} icon={faCss3Alt} /></a>
          <a href='https://www.javascript.com/'><FontAwesomeIcon className={Ho.icnm1} icon={faJs} /></a>
        </div>
      </div>
      <div className={Ho.main4}>
        <h1>
          A small advance<br /><span2>is enough to<br />start.</span2>
        </h1>
      </div>
      <div className={Ho.main5} data-aos="fade-right">
        <div className={Ho.main51} id='main5'>
          <h1>
            Portfolio<br />website starts from <span3>₹2000<br/>(Single Page)</span3>
          </h1>
        </div>
        <div className={Ho.main51}>
          <h1>
            Business or Commercial websites starts from{' '}
            <span3>₹4000<br />(1-4 Pages)</span3>
          </h1>
        </div>
      </div>
      <div className={Ho.main6}>
        <h1>
          Customer <span2>application<br />service is provided <br />from </span2>₹500
          / Month.
        </h1>
      </div>
      <div className={Ho.main7} id="main7">
        <h1>Available in<br />all trending platforms</h1>
        <div className={Ho.icf1}>
          <a href="https://www.linkedin.com/in/karthickrajan-s-08394b289/"><FontAwesomeIcon icon={faLinkedin} className={Ho.icnm12} /></a>
          <a href="https://github.com/Karthick1242004"><FontAwesomeIcon icon={faGithub} className={Ho.icnm12} /></a>
          <a href="https://www.instagram.com/karthick_124_/"><FontAwesomeIcon icon={faInstagram} className={Ho.icnm12} /></a>
          <a href="https://www.instagram.com/karthick_124_/"><FontAwesomeIcon icon={faFacebook} className={Ho.icnm12} /></a>
          <a href="https://wa.me/6382682378"><FontAwesomeIcon icon={faWhatsapp} className={Ho.icnm12}/></a>
        </div>
      </div>
      <div className={Ho.main8} id="main8">
        <div className={Ho.main81}>
          <img src={logo} className={Ho.imgg1} alt='Company Logo'/>
          <div className={Ho.main812}>
          <h1>About Us : </h1>
          <p> "Caliber builds web applications for customers, by using their inputs
          and as well as provides technical support and maintenance to the
          customer's application at affordable pricing with a unaffordable care ."</p>
        </div>
        </div>
        <div className={Ho.main82}>
          <h1>Contact Us : </h1>
          <p>Email : caliberandtech@gmail.com</p>
          <p>Call : +91 6382682378</p>
          <p>Whatsapp : 6382682378</p>
          <p>Instagaram : caliber_124_</p>
        </div>
        <div className={Ho.main83}>
          <h1>Founders : </h1>
          <p>Karthickrajan S</p>
          <p>Karan M</p>
          <p>Kamalesh J</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
