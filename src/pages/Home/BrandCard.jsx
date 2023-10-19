import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { id, brand_name, logo } = brand;
  return (
    <div>
      <Link to={`/branddeatils/${brand_name}`}>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2 border h-44">
            <img
              className="w-full h-full object-fill"
              src={logo}
              alt="Brand Logo"
            />
          </figure>
          <div className="card-body w-1/2 flex justify-center items-center">
            <h2 className="card-title">{brand_name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
