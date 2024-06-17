import React, { useState } from 'react';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";
import Footer from './Footer';
import './index.css';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };

      //for showing data of form as prompt message
    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        password:'',
    });

    const InputEvent =(event)=>{
        const {name,value} = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name]:value,
            };
        });
    }

    // const FormSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`My name is ${data.fullname}, my phone no. is ${data.phone}, My email id is ${data.email}, Password is ${data.password}`);
    // }

    return(
        <>
        <h1 className='heading'>Food Gallery</h1>
            <Navbar />
            <div className="contact-container">
            {/* <form onSubmit={FormSubmit} > */}
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">FullName</label>
                        <input type="text" name="fullname"  value={data.fullname} onChange={InputEvent} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" aria-describedby="emailHelp" />
                    </div>

        <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">Phone Number</label>
              <input type="number"  name="phone"  value={data.phone} onChange={InputEvent} className="form-control" id="exampleInputEmail2" placeholder="Enter your Phone Number" aria-describedby="emailHelp" />
        </div>


                    <div className="mb-3">
                       <label htmlFor="exampleInputEmail3" className="form-label">Email address</label>
                       <input type="email" name="email" {...register("email",{required: true,
                           pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})}  
                           value={data.email} onChange={InputEvent} className="form-control" id="exampleInputEmail3" placeholder="abc@gmail.com" aria-describedby="emailHelp" />
                       <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                       
                       {errors.email && errors.email.type === "required" && (
                        <p className="errorMsg">Email is required.</p>
                       )}
                       {errors.email && errors.email.type === "pattern" && (
                           <p className="errorMsg">Email is not valid.</p>
                       )}
                    </div>         

                    <div className="mb-3">
                       <label htmlFor="exampleInputPassword4" className="form-label">Password</label>
                       <input type="password" name="password" {...register("password", {required: true,minLength: 6
                       })} value={data.message} onChange={InputEvent} className="form-control" id="exampleInputPassword4" />
 
                    {errors.password && errors.password.type === "required" && (
                        <p className="errorMsg">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="errorMsg">
                           Password should be at-least 6 characters.
                        </p>
                    )}
                 </div>


        <div className="col-12">
              <button type="submit" className='btn btn-outline-primary submit-btn'>Submit Form</button>
        </div>
      </form>
            </div>
            <Footer /> 
        </>
    );
}

export default Contact;