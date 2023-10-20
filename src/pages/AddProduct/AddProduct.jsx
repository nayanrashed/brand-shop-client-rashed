import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const newProduct = { name, brand, type, price, photo, rating, description };
    // console.log(newProduct);
    //sending data to the server
    fetch('http://localhost:5000/products',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
    })
  };
  return (
    <div className="bg-pink-100 px-4 md:px-24 py-6 my-6">
      <h2 className="text-center text-xl md:text-2xl">Add Products</h2>
      <form onSubmit={handleAddProduct}>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <label className="">
              <input
                type="text"
                placeholder="Product Name"
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
                name="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <label className="">
              <input
                type="text"
                placeholder="Product Description"
                name="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input className="btn btn-block btn-outline bg-lime-300" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
