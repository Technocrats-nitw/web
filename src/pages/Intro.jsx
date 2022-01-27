import React from "react";

import ScrollAnimation from "react-animate-on-scroll"
import { Container } from "../components/styles/intro"


function Intro(){
  return(
    <Container id="home">      
      <div className="hero-text">

      <br/>
        <br/>
        <br/>

        <br/>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Technocrats Labs</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>We leverage ultimate technologies to transcend customer experience</h3>
        </ScrollAnimation>
        
        <br/>
        <br/>
        <br/>

        <br/>

      </div>
    </Container>
  )
}

export default Intro;