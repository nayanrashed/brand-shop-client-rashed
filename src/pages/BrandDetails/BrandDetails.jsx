import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandDetails = () => {
  const products = useLoaderData();

  const { brandName } = useParams();

  const brandProducts = products.filter(
    (product) => brandName == product.brand
  );
  
  // console.log(brandProducts);
  // console.log(products);
  return (
    <div className="w-full h-[70vh]">
      <h2 className="text-3xl text-center">{brandName}</h2>
      <div>
        <div className="carousel h-full md:w-3/4 rounded-md shadow-lg shadow-sky-300">
          <div id="slide1" className="carousel-item relative w-full">
            <img src='' className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src='' className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src='' className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {brandProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
