import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {
  const myCart = useLoaderData();
  const { user } = useContext(AuthContext);

  const [cartProducts, setCartProducts] = useState(myCart);

  useEffect(() => {
    const userEmail = user.email;
    const cartByEmailId = cartProducts.filter(
      (cartProduct) => cartProduct.userEmail === userEmail
    );
    setCartProducts(cartByEmailId);
  }, []);

  // console.log(cartProducts);

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-rashed-ek9o0irxz-rashed-nayans-projects.vercel.app/mycart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log("deleted successfully");
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingProducts = cartProducts.filter(
                (cartProduct) => cartProduct._id !== _id
              );
              setCartProducts(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center my-3 ">Number of products added to My Cart: {cartProducts.length}</h2>
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
                    className="btn btn-ghost btn-xs bg-lime-300"
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
