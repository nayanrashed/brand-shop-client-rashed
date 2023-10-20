import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  let error = useRouteError();
  return (
    <div
      className="bg-orange-400 flex flex-col items-center justify-center
         h-[100vh]"
    >
      <p className="text-white text-4xl">Opps</p>
      <p>
        error: <span className="text-white text-2xl">{error.status}</span>
      </p>
      <p className="">{error.data}</p>
      <Link to='/'><button className="btn btn-outline bg-lime-400">Home</button></Link>
    </div>
  );
};

export default ErrorPage;
