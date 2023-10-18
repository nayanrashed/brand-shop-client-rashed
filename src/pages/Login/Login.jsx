import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="bg-gray-200 px-16 py-4 my-4 rounded-lg">
      <h2 className="text-2xl text-center my-4">Please Login</h2>
      <form onSubmit={handleLogin} className="md:w-1/2 mx-auto my-4">
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
          //   error && <p className="text-red-400">{error}</p>
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">or</p>
      <p className="text-center">
        Login with <button className="btn btn-outline btn-sm">Google</button>
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
