import React from 'react'
import Avatar from "avataaars"
import { Col, Row } from "react-bootstrap"
export default function About() {
    return (

        <Row id="about">
            <Col className="avatar" ><Avatar
                avatarStyle='Transparent'
                topType='ShortHairSides'
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
            /></Col>
            <Col className="about-me"><h1>About Ed</h1>
                Something about me.</Col>
        </Row>
    )
}
