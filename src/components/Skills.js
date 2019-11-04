import React from 'react'
import { Card, ListGroup, Row, Col } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiPencilBrush } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai"


AOS.init();

export default function Skills() {
    return (
        <div id="skills" className="skills-card-wrapper ">
            <h1 >What I do...</h1>
            <hr className="divider my-4" />
            <h6 className="descriptor-skills">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nisl ut condimentum tempus. Nunc tortor purus, lobortis a porttitor congue, tincidunt ac ante. Etiam accumsan tincidunt urna, sit amet lobortis quam suscipit lacinia. Cras tellus urna, dignissim eget nulla ac, convallis rutrum quam. Cras tempor erat ut pellentesque maximus.</h6>
            <Row className="skill-card-row card-deck">
                <Col 
                data-aos="fade-up-right" 
                data-aos-duration="1500"
                className='skill-card-col ' >
                    <Card  className="skills-card-1" style={{ borderColor: "pink",  borderRadius: '10px'}}  >
                        <Card.Body >
                            <Card.Title>DESIGN</Card.Title>
                            <Card.Subtitle className="skill-icon"><GiPencilBrush size={32} className="GiPencilBrush" /> </Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML </ListGroup.Item>
                                <ListGroup.Item>CSS</ListGroup.Item>
                                <ListGroup.Item>PHOTOSHOP</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  
                data-aos="fade-up"
                data-aos-duration="1500"
                className='skill-card-col'>
                    <Card  className="skills-card-2" style={{ borderColor: "pink",  borderRadius: '10px'}}  >
                        <Card.Body>
                            <Card.Title>BUILD</Card.Title>
                           <Card.Subtitle className="skill-icon"><FaCode size={32} className="FaCode" /> </Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>JAVASCRIPT</ListGroup.Item>
                                <ListGroup.Item>REACT</ListGroup.Item>
                                <ListGroup.Item>PYTHON</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col 
                data-aos="fade-up-left" 
                data-aos-duration="1500"
                className='skill-card-col'>
                    <Card sm className="skills-card-3" style={{ borderColor: "pink",  borderRadius: '10px'}} >
                        <Card.Body >
                            <Card.Title>LEAD</Card.Title>
                            <Card.Subtitle className="skill-icon"><AiOutlineTeam size={32} className="AiOutlineTeam" /> </Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                             </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
