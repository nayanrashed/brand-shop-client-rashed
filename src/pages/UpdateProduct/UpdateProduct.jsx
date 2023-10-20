import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, price, photo, rating } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const updatedProduct = { name, brand, type, price, photo, rating };
    console.log(updatedProduct);

    //send data to the server
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-pink-100 px-4 py-6 md:px-24 my-6">
        <form onSubmit={handleUpdateProduct}>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Product Name"
                  defaultValue={name}
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Brand Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Brand Name"
                  defaultValue={brand}
                  name="brand"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Type</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Product Type"
                  defaultValue={type}
                  name="type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Price"
                  defaultValue={price}
                  name="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Photo URL"
                  defaultValue={photo}
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <label className="">
                <input
                  type="text"
                  placeholder="Rating"
                  defaultValue={rating}
                  name="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            className="btn btn-block mt-4 bg-lime-400"
            type="submit"
            value="Update Product"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
