import React from 'react'

export default function Masthead() {

const TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  const that = this;
  let delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//   document.body.appendChild(css);
};

    return (

        <header className="masthead" >
            <div className="container h-100" >
                <div className="row h-100 align-items-center justify-content-center text-center" >
                    <div className="col-lg-10 align-self-end" >
                        <h1 className=" masthead-text">{"{ Ed Is A ."}<span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[ "Dev }", "Creative }", "Londoner }","Stoke City Fan }", "Professional }", "Dev }"]'></span>
                        </ h1 >
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline" >
                        <p className="text-white-75 font-weight-light mb-5">Want to breathe new life into your current business, or start a new project from scratch? I can help turn those thoughts into reality!   </ p>
                        <a className="btn  btn-xl js-scroll-trigger" href="#about">Yeah, But Who Is Ed?</a>
                    </div>
                </div>
            </div>
        </header>

        


    )
}
