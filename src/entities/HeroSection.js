import React from "react";
import './index.css';
import SearchBar from "./SearchBar";

const HeroSection =() =>{
    return (
        <div >
            <div className="hero-section">
            </div>
            <div className="hero-content">
            <h1>Find the Perfect deal, always</h1>
            </div>
            <div className="hero-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ,Lorem ipsum dolor sit amet,Lorem ipsum dolor , consectetur adipiscing elit .</p>
            <div className="search">
            <SearchBar />
            </div>
            </div>
            
        </div>
    )
}
export default HeroSection;