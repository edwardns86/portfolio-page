import React from 'react'
import { FiMail } from "react-icons/fi"
import {FaLinkedin , FaGithubAlt} from "react-icons/fa"

export default function Contact() {
    return (
        <div id="contact" >
            <div className="container-fluid , contact-content" >

                <h1>Get In Touch!</h1>
                <hr className="divider my-4" />
                <p>Got an idea but don't know how to build it? </p>
                <p>I can help you build out your new project in style. Send me an email and I will get back to you as soon as possible!</p>
                <h1> 
                    <span><a href="mailto:ed@edisa.dev "  ><FiMail className="FaContact"/> </a></span> 
                    <span><a href="https://github.com/edwardns86 "  ><FaGithubAlt className="FaContact"/> </a></span> 
                    <span><a href="https://www.linkedin.com/in/edward-stevens-41057016/ "  ><FaLinkedin className="FaContact"/> </a></span> 
                </h1>
                

            </div>
        </div>

    )
}
