import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, brand, type, price, photo, rating, description } = product;
  return (
    <div className="shadow-lg shadow-lime-200">
      <div className="card card-side bg-base-100 shadow-xl h-64 border">
        <figure className="w-2/5">
          <img className="w-full h-full object-fill"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body w-3/5">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{brand}</h2>
          <p>{type}</p>
          <div>
            <p>Rating: <span className="font-semibold">{rating}</span></p>
            <p>Price: {price} tk</p>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/products/${_id}`}><button className="btn btn-sm bg-lime-300">Details</button></Link>
            <Link to={`/updateproduct/${_id}`}><button className="btn bg-lime-300 btn-sm">Update</button></Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
