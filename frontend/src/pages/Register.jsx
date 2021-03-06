import React, { useState ,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { register,reset } from '../features/auth/authSlice';
import {useSelector,useDispatch} from 'react-redux'
import Spinner from '../components/Spinner';




const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });


  const dispatch=useDispatch()
  const {user,isLoading,isError,isSuccess,message}=useSelector(state=>state.auth)
  const { name, email, password, password2 } = formData;

const navigate = useNavigate()


  useEffect(()=>{
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {

      navigate('/')
    }
    dispatch(reset())

  },[isError,isSuccess,message,dispatch,navigate,user])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const onSubmit=(e)=>{

    e.preventDefault()
    if (password !== password2) {
      
      toast.error('Password does Not match')
    }
    else{
      const userData={
        name,email,password
      }

      dispatch(register(userData))
    }
  }

if (isLoading) {
  return <Spinner/>
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
            required
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
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            name="password"
            onChange={onChange}
            placeholder="Enter your Password"
            required
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
            required
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
