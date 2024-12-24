// import React from 'react'
import styled from "../Portfolio/index.module.scss";
import home from "../assets/images/home-image.webp";
import about from "../assets/images/about-me.webp";
import skills from "../assets/images/skills.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Brend ikonalar üçün
import { faLifeRing } from "@fortawesome/free-regular-svg-icons"; // Regular ikonlar
import { faLaptop, faLeaf } from "@fortawesome/free-solid-svg-icons"; // Solid ikonlar

import { useEffect, useState } from "react";

const Portfolio = () => {
  const [displayText, setDisplayText] = useState(""); // Göstərilən mətn
  const text = "Hii, I am Shola"; 
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index)); // Yeni hərf əlavə et
        index++;
      } else {
        clearInterval(typingInterval); // Yazı bitdikdə intervalı təmizlə
      }
    }, 200); // Hər hərf arasında 200ms gecikmə

    return () => clearInterval(typingInterval); // Komponent unmount olarsa intervalı təmizlə
  }, []);

  return (
    <>
    
      <header>
        <div className={styled.head}>
          <h4>My Portfolio</h4>
          <nav>
            <ul>
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About Me</li>
              </a>
              <a href="#services">
                <li>Services</li>
              </a>
              <a href="#skills">
                <li>My Skills</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
        </div>
      </header>

      <div className={styled.sec1} id="home">
        <div className={styled.text}>
          <h1 id="typing-effect">
          <div style={{ fontSize: "24px", fontFamily: "serif", color: "darkgreen" }}>
      {displayText}
    </div>
          </h1>
          <p>
            {" "}
            Hi there! My name is Shola, a passionate and dedicated frontend
            developer in training. I enjoy creating beautiful and functional web
            designs that reflect creativity and innovation. Currently, I am
            enhancing my skills and knowledge through hands-on practice and
            continuous learning. My ultimate goal is to become a professional
            developer and contribute to impactful projects. Outside of coding, I
            love exploring new ideas, connecting with people, and embracing
            challenges that push me to grow.
          </p>
          <a href="c:\Users\Admin\Downloads\Şölə Həşimova (1).pdf" target="_blank" rel="noopener noreferrer"><button>CV</button></a>
        </div>
        <div className={styled.image}>
          <img src={home} alt="" />
        </div>
      </div>

      <div className={styled.sec2} id="about">
        <div className={styled.text}>
          <h2>About Me</h2>
          <p>
            {" "}
            I’m Shola, a passionate frontend developer in training, <br />{" "}
            constantly learning to build creative and functional web
            applications. <br /> My journey is driven by a love for coding,
            problem-solving, an impact through technology.
          </p>
          <img src={about} alt="" />
        </div>
        <div className={styled.information}>
          <h2>Information</h2>
          <ul>
            <a href="https://github.com/sholeheshimova">
              <li>
                <FontAwesomeIcon icon={faGithub} /> Github
              </li>
            </a>
            <a href="https://www.linkedin.com/in/şölə-həşimova-41b740289">
              <li>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </li>
            </a>
          </ul>

          <ul className={styled.firstlist}>
            <a href="">
              <li>
                {" "}
                <FontAwesomeIcon icon={faLifeRing} />
                Lifelong learner
              </li>
            </a>
            <a href="">
              {" "}
              <li>
                {" "}
                <FontAwesomeIcon icon={faLaptop} />
                Coding enthusiast
              </li>
            </a>
            <a href="">
              {" "}
              <li>
                {" "}
                <FontAwesomeIcon icon={faLeaf} />
                Nature lover
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className={styled.sec3} id="services">
        <h2>My services</h2>
        <div className={styled.cards}>
          <div className={styled.card1}>
            <div className="icons">
              <i class="fa-solid fa-web-awesome"></i>
            </div>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias in sapiente quo deserunt provident ab omnis distinctio
              neque nobis beatae enim laboriosam, possimus tenetur voluptatem
              minima praesentium earum veniam repellendus!
            </p>
          </div>
          <div className={styled.card2}>
            <div className="icons">
              <i class="fa-solid fa-code"></i>
            </div>
            <h3>Devolopment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              laudantium et alias dicta amet quidem odit cupiditate dolore
              nostrum vero ab, maxime officiis molestias voluptatem dolor
              quaerat aliquid iure optio!
            </p>
          </div>
          <div className={styled.card3}>
            <div className="icons">
              <i class="fa-solid fa-chart-simple"></i>
            </div>
            <h3>SEO Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              dolorum est repellendus omnis beatae, officia obcaecati magni
              molestias cupiditate reiciendis dolore laborum itaque at eveniet
              unde animi architecto ullam dolor.
            </p>
          </div>
          <div className={styled.card4}>
            <div className="icons">
              <i class="fa-solid fa-pen"></i>
            </div>
            <h3>Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quo, repellendus rerum sapiente deleniti, eos eveniet deserunt
              earum natus provident, repellat veniam vitae veritatis suscipit
              unde laboriosam minima? Sint, sequi!
            </p>
          </div>
          <div className={styled.card5}>
            <div className="icons">
              <i class="fa-regular fa-window-restore"></i>
            </div>
            <h3>Devolopment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              nesciunt repellat sequi, aut veniam, sit dolore molestiae ea,
              asperiores fugiat error! Sint quas fuga voluptas molestiae laborum
              alias, sunt obcaecati!
            </p>
          </div>
          <div className={styled.card6}>
            <div className="icons">
              <i class="fa-solid fa-lightbulb"></i>
            </div>
            <h3>SEO Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dignissimos omnis ipsum architecto ut odit, sapiente animi facilis
              aspernatur, culpa porro. Soluta unde dicta aperiam, doloribus eius
              temporibus provident expedita.
            </p>
          </div>
        </div>
      </div>

      <div className={styled.sec4} id="skills">
         <div className={styled.cards}>
            <div className={styled.card1}>
            <i class="fa-brands fa-html5"></i>
                <h2>HTML</h2>
            </div>
            <div className={styled.card2}>
            <i class="fa-brands fa-css"></i>
            <h2>CSS</h2>
            </div>
            <div className={styled.card3}>
            <i class="fa-brands fa-js"></i>
            <h2>JavaScript</h2>
            </div>
            <div className={styled.card4}>
            <i class="fa-brands fa-react"></i>
            <h2>React</h2>
            </div>
         </div>
         <div className="image">
            <img src={skills} alt="" />
         </div>
      </div>

      <footer>
  <div>
    <h4>Contact</h4>
    <ul>
      <li><a href="#">WhatsApp</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">Facebook</a></li>
    </ul>
  </div>
  <div>
    <h4>Pages</h4>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About Me</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Skills</a></li>
    </ul>
  </div>
  <div>
    <h4>Follow Me</h4>
    <div className={styled.socialicons}>
      <a href="#"><i class="fab fa-whatsapp"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
    </div>
  </div>
</footer>
    </>
  );
};

export default Portfolio;

