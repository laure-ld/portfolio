import React from "react";
import About from "./about";
import Carrousel from "./projects";
import Skills from "./skills";
import data from "../data-projects.json";

function Main() {
    return( 
        <section className="contenair-main">
            <About />
            <Carrousel data={data}/>
            <Skills />
        </section>
    )
}

export default Main;