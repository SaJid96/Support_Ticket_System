import React,{useState} from 'react';
import {FaUser} from 'react-icons/fa'
const Register = () => {

  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password1:'',
    password2:''
  })


  const {name,email,password1,password2}=formData
const onChange=(e)=>{
  setFormData((prevState)=>({

    ...prevState,
    [e.target.name]:e.target.value
  }))
}
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            name="name"
            onChange={onChange}
            placeholder="Enter your Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            name="email"
            onChange={onChange}
            placeholder="Enter your Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password1"
            value={password1}
            name="password1"
            onChange={onChange}
            placeholder="Enter your Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password2"
            value={password2}
            name="password2"
            onChange={onChange}
            placeholder="Confirm your Password"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Register;
