import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, price, photo, rating, description } = product;
  const { user } = useContext(AuthContext);
  
  const userEmail =user.email;
  const productId = _id

  const handleAddToCart=()=>{
    const addedProduct ={productId,userEmail,name,brand,price,photo}
    // console.log(addedProduct);

    fetch('https://brand-shop-server-rashed-8aqkjxqgb-rashed-nayans-projects.vercel.app/mycart',{
      method:"POST",
      headers:{
        "content-type":"application/json",        
      },
      body: JSON.stringify(addedProduct)
    }) 
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Product Added to the Cart Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }
    })


    
  }
  return (
    <div className="md:flex md:mx-20 shadow-lg shadow-lime-200 my-8">
      <div className="md:w-3/5 flex flex-col justify-center items-center">
        <h3 className="text-xl">{brand}</h3>
        <h2 className=" text-3xl">{name}</h2>
        <h4 className="">{type}</h4>
        <p className="">{description}</p>
      </div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mx-auto md:w-2/5">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img src={photo} className="object-fill w-4/5 h-full mx-auto" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-around mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {price} tk
            </p>
          </div>
          
        </div>
        <div className="p-6 pt-0">
          <Link>
            <button onClick={handleAddToCart}
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-lime-300"
              type="button"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
