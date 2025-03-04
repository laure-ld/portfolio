import React from "react";
import About from "./about";
import Carrousel from "./projects";

function Main() {
    return( 
        <section className="contenair-main">
            <About />
            <Carrousel />
        </section>
    )
}

export default Main;