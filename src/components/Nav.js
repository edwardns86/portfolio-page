import React from 'react'
import Navbar from 'react-bootstrap'


export default function Navi() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  fixed-top py-3" id="mainNav">
                <div className="container-fluid">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Edward Stevens</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className=" js-scroll-trigger" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className=" js-scroll-trigger" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className=" js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className=" js-scroll-trigger" href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
