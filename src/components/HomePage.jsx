import React, { useState } from "react";
import storeItems from "../data";
import {FaTimes} from 'react-icons/fa'


const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false)
    const length = storeItems.length;

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }
    const handlePrevious = () => {
        setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
      };
      const handleNext = () => {
        setCurrentIndex(currentIndex === length - 1 ? length - 1 : currentIndex + 1);
      };
  return (
   <>
      <div className="flexbox">
        <section className="one">
          <div className="pix">
            {storeItems.map((item, index) => (
              <div key={index} className={index === currentIndex ? " pix" : ""}>
                {index === currentIndex && (
                  <img
                    key={index}
                    src={item.desktopImage}
                    alt="hero-1"
                    className="desktop-hero-1"
                  />
                )}
                {index === currentIndex && (
                  <img
                    key={item.id}
                    src={item.mobileImage}
                    alt="hero-1"
                    className="hero-1"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="wrapper">
            {storeItems.map((item, index) => (
              <div
                key={index}
                className={index === currentIndex ? "wrapper" : ""}
              >
                {index === currentIndex && (
                  <div className="discover">
                    <h1>{item.title}</h1>{" "}
                  </div>
                )}
                {index === currentIndex && (
                  <div className="description">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
            <div className="shop">
              <h2>SHOP NOW</h2>
              <img
                src="/icon-arrow.svg"
                alt="icon"
                className="shopping-arrow"
              />
            </div>
          </div>
        </section>
        <nav className="nav">
          <div className="menu">
            {!open && (
              <img
                src="/icon-hamburger.svg"
                alt="icon"
                className="hamburger"
                onClick={handleOpen}
              />
            )}
            {open && <FaTimes className="close" onClick={handleOpen} />}
          </div>
          <div className="desktop-logo">
            <h3>room</h3>
          </div>
          {!open && (
            <div className="mobile-logo">
              <h3>room</h3>
            </div>
          )}
        </nav>
        <ul className="desktop-menu">
          <div className="li-bg">
            <li>home</li>
          </div>
          <div className="li-bg">
            <li>shop</li>
          </div>
          <div className="li-bg">
            <li>about</li>
          </div>
          <div className="li-bg">
            <li>contact</li>
          </div>
        </ul>
        {open && (
          <ul className="mobile-menu">
            <div className="li-bg">
              <li>home</li>
            </div>
            <div className="li-bg">
              <li>shop</li>
            </div>
            <div className="li-bg">
              <li>about</li>
            </div>
            <div className="li-bg">
              <li>contact</li>
            </div>
          </ul>
        )}
        {open && <div className="mobile-menu-bg"></div>}
        {open && (
          <div
            className={open ? "mobile-menu-banner" : "mobile-menu-banner-close"}
          ></div>
        )}
        <div className="mobile-arrows">
          <button className="left-bg" onClick={handlePrevious}>
            <img src="/icon-angle-left.svg" alt="arrow" className="left" />
          </button>
          <button className="right-bg" onClick={handleNext}>
            <img src="/icon-angle-right.svg" alt="arrow" className="right" />
          </button>
        </div>
        <div className="desktop-arrow">
          <button className="left-arrow-bg" onClick={handlePrevious}>
            <img
              src="/icon-angle-left.svg"
              alt="arrow"
              className="left-arrow"
            />
          </button>
          <button className="right-arrow-bg" onClick={handleNext}>
            <img
              src="/icon-angle-right.svg"
              alt="arrow"
              className="right-arrow"
            />
          </button>
        </div>
      </div>
      <section className="three">
        <div className="pix-container">
          <img src="/image-about-dark.jpg" alt="about" className="dark" />
        </div>
        <div className="wrapper2">
          <div className="about">
            <h1>ABOUT OUR FURNITURE</h1>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <div className="lightPix-container">
          <img src="/image-about-light.jpg" alt="about" className="light" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
