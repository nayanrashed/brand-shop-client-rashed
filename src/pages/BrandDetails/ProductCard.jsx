import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, brand, type, price, photo, rating, description } = product;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-64 border">
        <figure className="w-1/3">
          <img className="w-full h-full object-fill"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{brand}</h2>
          <p>{type}</p>
          <div>
            <p>Rating: {rating}</p>
            <p>Price: {price} tk</p>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/products/${_id}`}><button className="btn btn-sm">Details</button></Link>
            <Link to={`/updateproduct/${_id}`}><button className="btn btn-sm">Update</button></Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
