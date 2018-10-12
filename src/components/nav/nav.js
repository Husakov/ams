import React, { Component } from 'react';
import './nav.css';
import pozadina from "./pozadina1.m4v";
import LazyLoad from 'react-lazyload';
import logo from "./logo.png";

class Navs extends Component {
    render() {
        return (
            <div>
            <div className='navbars'>
                <img className={logo} style={{float:'left'}} src={logo} alt="description of image"/>
                <ul>
                    <li><a >O nama</a></li>
                    <li><a >Usluge</a></li>
                    <li><a >Projekti</a></li>
                    <li><a >Certifikati</a></li>
                    <li><a >Akcije</a></li>
                    <li><a >Kontakt</a></li>
                </ul>
            </div>
            <div>

            </div>

                <div className="videocontainer">
                <video id="background-video" loop autoPlay preload="auto">
                    <source src={pozadina} type="video/ogv" />
                    <source src={pozadina} type="video/webm" />
                    <source src={pozadina} type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
                <div>
                    <img className="videologo" src={logo} alt="description of image"/>
                    <div className="overlay">
                        <marquee  direction="down" scrollamount="5"><b>AMS engineering</b></marquee>
                    <marquee behavior="scroll" direction="right" scrollamount="10">Gradjevinski radovi</marquee>
                    <marquee behavior="scroll" direction="right" scrollamount="20">Stolarija</marquee>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navs;
