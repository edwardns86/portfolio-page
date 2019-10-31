import React from 'react'

export default function Masthead() {
    return (
        
            <header className="masthead" >
                <div className="container h-100" >
                    <div className="row h-100 align-items-center justify-content-center text-center" >
                        <div className="col-lg-10 align-self-end" >
                            <h1 className="text-uppercase text-white font-weight-bold">Ed Is A . Dev</ h1 >
                            <hr className="divider my-4" />
                        </div>
                            <div className="col-lg-8 align-self-baseline" >
                                <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached! </ p>
                                <a className="btn  btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                            </div>
                        </div>
                    </div>
            </header>

       
            )
        }
