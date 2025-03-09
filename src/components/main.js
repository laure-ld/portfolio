import React from "react";
import About from "./about";
import Carrousel from "./projects";
import Skills from "./skills";

function Main() {
    return( 
        <section className="contenair-main">
            <About />
            <Carrousel />
            <Skills />
        </section>
    )
}

export default Main;