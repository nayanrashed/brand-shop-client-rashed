import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [registrationError, setRegistrationError] = useState("");

  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;    
    const password = form.password.value;
    console.log(name, email, password);

    setRegistrationError("");
    setError("");

    if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
      setError(
        "Your password should have at least 6 characters with at least one capital letter and one special character"
      );
    } else {
      setError("");
      //create User
      createUser(email, password)
        .then((result) => {
          console.log(result);
          e.target.reset();
          navigate("/");
          Swal.fire({
            title: "Success",
            text: "Registration Successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
        })
        .then((error) => {
          console.error(error);
          setRegistrationError(error.message);
          Swal.fire({
            title: "Error!!!",
            text: "Wrong Email or Password",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    }
  };
  return (
    <div>
      <div className="bg-gray-200 px-16 py-4 my-4 rounded-lg shadow-md shadow-lime-200 md:w-3/4 mx-auto">
        <h2 className="text-2xl text-center my-4">Please Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 mx-auto my-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
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
          {error && <p className="text-red-400">{error}</p>}
          <div className="form-control mt-6">
            <button className="btn btn-block btn-outline bg-lime-300">
              Register
            </button>
          </div>
        </form>

        <p className="text-center">
          Already have an account?
          <Link to="/login" className="text-red-400 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
