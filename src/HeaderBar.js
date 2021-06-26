import React from "react";
import Logo4 from "./images/Loanbuddy.png"
import "./HeaderBar.css";
import {Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <header className="header">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <Link to="/"><img src={Logo4} alt="Loanbuddy logo" className="mainlogo img-fluid" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link active" title="Go to the Home page">Home<span className="sr-only">(current)</span></Link>
        <Link to="/Apply" className="nav-item nav-link" title="Go to the application form">Apply</Link>
        <Link to="/Contact" className="nav-item nav-link" title="Go to the contact page">Contact</Link>
        </div>
        </div>
        </nav>
        </div>
    </header>
  );
}