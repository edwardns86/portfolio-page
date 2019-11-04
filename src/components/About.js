import React from 'react'
import Avatar from "avataaars"
import { Col, Row } from "react-bootstrap"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function About() {
    return (

        <Row id="about">
            <Col 
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="avatar" >
                <Avatar
                avatarStyle='Transparent'
                topType='NoHair'
                accessoriesType='Blank'
                hairColor='Black'
                facialHairType='BeardLight'
                facialHairColor='Black'
                clotheType='CollarSweater'
                clotheColor='PastelBlue'
                eyeType='Default'
                eyebrowType='DefaultNatural'
                mouthType='Smile'
                skinColor='Light'
            />
            </Col>
            <Col 
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            className="about-me">
                <h1>Hi I'm Ed</h1>
                <p>I am freelance front-end web developor with over 10 years experience working in e-commerce. I have knowledge of both B2B and B2C facing companies and can help build your brand and give it the competitive edge online.</p>
                <p>I am fuelled by a passion for understanding business models and products and then discovering effective ways to connect them with their user base. I am always learning and love to work on challenging projects that test my abilities to their limits.</p>
                <p>As a business owner myself I understand the challenges and pitfalls faced when building, launhcing and growing a brand online. I take this experience with me on every project I work on and can help you avoid mistakes as you grow.</p>
                <p>I am currently looking for remote based projects, so get in touch and let's discuss building and developing your next project!</p>
            </Col>
        
        </Row>
    )
}
