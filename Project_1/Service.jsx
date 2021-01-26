import react from "react";
import Card from "../Project_1/Card";
import imgaa1 from "../Project_1/img/roshan.png";
import imgaa2 from "../Project_1/img/shani1.jpeg";
import imgaa3 from "../Project_1/img/sushil1.jpeg";
import imgaa4 from "../Project_1/img/ts1.jpeg";
import imgaa from "../Project_1/image1.png";

const Service = () => {
    return(
        <>
       <section className="my-5">
            <h1 className="text-center font-weight-bold">Our Services</h1>
            </section>
            <div className=" container-fluid mb-5">
                <div className="row">
                    <div className=" col-10 mx-auto ">
                        <div className="row gy-4">
                            <Card name="Roshan Mishra" img={imgaa1} p="Web Devloper"/>
                            <Card name="Shani Tiwari" img={imgaa2} p="Web Devloper"/>
                            <Card name="Sushil Yadav" img={imgaa3} p="Web Devloper"/>
                            <Card name="Taufiq Shaik" img={imgaa4} p="Web Devloper"/>
                            <Card name="ky malum" img={imgaa} p="ky malum"/>
                            <Card name="Add karo" img={imgaa} p="Add karo"/>
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}
export default Service;