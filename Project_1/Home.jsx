import react from "react";
import imag from "../Project_1/img/roshan.png";
import Compo from "../Project_1/Compo";
const Home = () => {

    return(
        <>
        <Compo
        name="Wel-come to my world"
        p="My world is fully Digital and up-to-date "
        imgsrc={imag}
        visit="CV "
        btname="Download CV "
        />
        
        </>
    )
}
export default Home;