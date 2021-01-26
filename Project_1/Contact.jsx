import react, { useState } from "react";
const Contact = () => {
    const [Get,setGet] = useState({
        fname:"",
        phone:"",
        email:"",
        areatext:""
    });
    const Fullname = (event) => {
        const {name,value} = event.target;

        setGet((preVal) => {
            return{
                ...preVal,                                      //spread operator
                [name]:value,
            }
        })
    }

const onsub = (e) => {
    e.preventDefault();
    alert (`My name is :${Get.fname} my phone number is ${Get.phone} my email id is : ${Get.email} `)

}

    return(
        <>
            <h1 className="text-center font-weight-bold my-5">Contact Me / Hire Me</h1>
            <div className=" container ">
                <div className="row">
                    <div className=" col-10 mx-auto col-md-6">
                        <form onSubmit={onsub}>
                            <div class="mb-3">
                                <label class="form-label">FullName</label>
                                <input type="text" class="form-control" 
                                autoComplete="off"
                                name="fname"
                                value={Get.fname}
                                onChange={Fullname}
                                placeholder="Enter Your FullName"/>
                            </div>
                            <div class="mb-3">
                                <label 
                                class="form-label">Phone</label>
                                <input type="text" 
                                name="phone"
                                autoComplete="off"
                                class="form-control"
                                value={Get.phone}
                                onChange={Fullname} 
                                 placeholder="Enter Your Phone Number"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email"
                                 class="form-control"
                                 autoComplete="off"
                                 onChange={Fullname}
                                 value={Get.email}
                                 name="email"
                                 placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label autoComplete="off" class="form-label">Example textarea</label>
                                <textarea 
                                class="form-control"
                                onChange={Fullname}
                                value={Get.areatext}
                                name="areatext" 
                                rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary"
                                type="submit">Submit form</button>
                            </div><br/>
                        </form>
                    </div>
                </div>
            </div>    
        </>
    )
}
export default Contact;