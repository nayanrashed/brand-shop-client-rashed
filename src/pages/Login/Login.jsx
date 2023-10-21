import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn,signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate(); 
  const location= useLocation();

  const [error, setError]= useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError('');

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: 'Success',
          text: 'Login Successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        //navigate After Login
        navigate(location?.state ? location.state:'/')
        
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        Swal.fire({
          title: 'Error!!!',
          text: 'Wrong Email or Password',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      });
  };

  const handleGoogleSignIn=()=>{
    signInWithGoogle()
    .then(result=>{
      navigate('/');
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error)
    })
  }
  return (
    <div className="bg-gray-200 px-16 py-4 my-4 rounded-lg shadow-md shadow-lime-200 md:w-3/4 mx-auto">
      <h2 className="text-2xl text-center my-4">Please Login</h2>
      <form onSubmit={handleLogin} className="md:w-3/4 mx-auto my-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            name="password"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        {
            error && <p className="text-red-400">{error}</p>
        }
        <div className="form-control mt-6">
          <button className="btn btn-block btn-outline bg-lime-300">Login</button>
        </div>
      </form>
      <p className="text-center">or</p>
      <p className="text-center">
        Login with <button onClick={handleGoogleSignIn} className="btn btn-outline btn-sm">Google</button>
      </p>

      <p className="text-center">
        Do not have an account?
        <Link to="/register" className="text-red-400 font-bold">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
