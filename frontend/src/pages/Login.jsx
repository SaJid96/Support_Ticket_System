import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { login } from '../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({
  
    email: '',
    password: '',
   
  });
 const dispatch = useDispatch();
 const { user, isLoading, isSuccess, message } = useSelector(
   (state) => state.auth
 );
  const { email, password,  } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData={
      email,password
    }
    dispatch(login(userData))
   
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
Login
        </h1>
        <p>Please login to get support</p>
      </section>

      <form onSubmit={onSubmit}>
   
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
          <button className="btn btn-block">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
