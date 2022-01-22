import React from "react";
import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";
import { Cpp, Css, Django, HTML, Js, Mongo, Mysql, Nodejs, Python, REACT, Typescript } from "../Icons/Icons";
import SufiyanImg from "../../assets/sufiyan.jpeg";


export function Sufiyan(){
  return(
    <Container id="sobre">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={SufiyanImg} alt="Sufiyan Ansari" />
        </ScrollAnimation>

      </div>

      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Mohd. Sufiyan Ansari</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Me chamo João Túlio, sou técnico em informática com uma grande paixão por programação. Sou apaixonado por entregar soluções que agregam na vida das pessoas e ao mesmo tempo me desafiam. Aprimorei minhas habilidades como desenvolvedor Front-End e Back-End</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Desenvolvo sites e aplicações utilizando HTML, CSS, e JavaScript. Tenho familiaridade em desenvolver layouts que me fornecem. Estou sempre me aprimorando a cada projeto que colocam em minhas mãos.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Sou uma pessoa dedicada que corre atrás para realizar seus sonhos, trabalhador e orientado a resultados, sempre busco alcançar minha melhor versão.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Aqui estão as minhas principais habilidades:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <Cpp/>
          <Django/>
          <REACT/>
          <Js/>
          <HTML/>
          <Css/>
          <Nodejs/>
          <Mysql/>
          <Mongo/>
          <Typescript/>
          <Python/>
        </div>
      </div>
      
    </Container>
  )
}