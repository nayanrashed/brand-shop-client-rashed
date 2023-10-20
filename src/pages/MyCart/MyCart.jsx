import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const myCart = useLoaderData();
  const [cartProducts, setCartProducts] = useState(myCart);
  console.log(cartProducts);

  const handleDelete = (_id) => {
    // console.log(_id);
    fetch(`http://localhost:5000/mycart/${_id}`,{
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        console.log('deleted successfully');
        const remainingProducts = cartProducts.filter(cartProduct=>cartProduct._id !==_id)
        setCartProducts(remainingProducts); 
      }
    })
    
  };

  return (
    <div>
      <h2>Products in My Cart:{cartProducts.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Selected</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartProducts.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm opacity-50">{product.type}</div>
                    </div>
                  </div>
                </td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
