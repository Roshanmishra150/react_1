import react from "react";
import {NavLink} from "react-router-dom";

const Card = (props) =>{
    return(
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.img} className="card-img-top w-100 cardimg" alt="s1"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.p}</p>
                        <NavLink to="./contact" className="btn btn-primary">Get Me</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;