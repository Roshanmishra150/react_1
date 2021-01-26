import react from "react";
import imag from "../Project_1/img/roshan.png";
import Compo from "../Project_1/Compo";

const About = () => {
    return(
        <>
        <Compo
        name="Hello! my name is "
        imgsrc={imag}
        visit="/service"
        btname="Services "
        p="To see my skills and the services which i can provied to you hit this button"
        />
        </>
    )
}
export default About;