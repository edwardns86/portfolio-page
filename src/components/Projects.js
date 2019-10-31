import React from 'react'
import { Card, Button, Tab, Tabs, } from 'react-bootstrap'
import weatherimage from "./images/Weather-App.png"
import currencyimage from "./images/Currency-converter.png"
import mindreaderimage from "./images/Mind-reader.png"
import gameimage from "./images/Sweet-dreams.png"
import twitterimage from "./images/Twitter-clone.png"
import taskmanagerimage from "./images/Task-manager.png"


export default function Projects() {
    return (
        <div id="projects">

            <section id="portfolio" >
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg" >
                                <img class="img-fluid" src={weatherimage} alt="" />
                                <div class="portfolio-box-caption">
                                    <div class="project-category text-white-50">
                                        Category
                                     </div>
                                    <div class="project-name">
                                        Project Name
                                 </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                                <img class="img-fluid" src={currencyimage} alt="" />
                                <div class="portfolio-box-caption">
                                    <div class="project-category text-white-50">
                                        Category
                                    </div>
                                    <div class="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/3.jpg">
                                <img class="img-fluid" src={mindreaderimage} alt="" />
                                <div class="portfolio-box-caption">
                                    <div class="project-category text-white-50">
                                        Category
                                    </div>
                                    <div class="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/4.jpg">
                                <img class="img-fluid" src={gameimage} alt="" />
                                <div class="portfolio-box-caption">
                                    <div class="project-category text-white-50">
                                        Category
                                    </div>
                                    <div class="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/5.jpg">
                                <img class="img-fluid" src={twitterimage} alt="" />
                                <div class="portfolio-box-caption">
                                    <div class="project-category text-white-50">
                                        Category
                                    </div>
                                    <div class="project-name">
                                        Project Name
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/6.jpg">
                                <img class="img-fluid" src={taskmanagerimage} alt="" />
                                <div class="portfolio-box-caption p-3">
                                    <div class="project-category text-white-50">
                                        Category
                                   </div>
                                    <div class="project-name">
                                        Project Name
                                   </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
