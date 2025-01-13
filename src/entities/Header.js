import React from "react";
import "./index.css";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <div className="hero">
    <header className="header">
      <div className="logo">
        <img className="img"
          src="https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/286ebfc6c07d6a38969da05b673b21be6e89eab3/book-my-hotel-logo.svg"
          alt="Book My Hotel Logo"
        />
      </div>
      <div>
        <text className="home">Home</text>
      </div>
      <div>
        <text className="hotels">Hotels</text>
      </div>
      <div>
        <text className="places">Places</text>
      </div>

      <div > 
        <text className="signIn">Sign in</text>
      </div>
      
      {/* <div className="auth">
        <a href="#signin" className="signin">
          Sign in
        </a>
      </div> */}
    </header>
    <HeroSection />
    </div>
  );
};

export default Header;
