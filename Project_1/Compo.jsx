import react from "react";
import { NavLink } from "react-router-dom";
const Compo = (props) => {

    return(
        <>
        <section className="align-items-center d-flex">
            <div className=" container-fluid ">
                <div className="row">
                    <div className=" col-10 mx-auto ">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 pb-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name}<br/> <strong className=" text-primary">Roshan Mishra</strong></h1>
                                <p >{props.p}</p>
                                <div className="mt-3">
                                    <NavLink className="btn btnho " to={props.visit}>{props.btname}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 pt-lg-4 pt-3">
                                <img src={props.imgsrc} className="img-fluid animated h-55 " alt="my img"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Compo;