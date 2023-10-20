import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import AdvCarousel from "./AdvCarousel";

const BrandDetails = () => {
  const products = useLoaderData();

  const { brandName } = useParams();

  const brandProducts = products.filter(
    (product) => brandName == product.brand
  );
  const itemNumber = brandProducts.length;
  // console.log(itemNumber);

  // console.log(brandProducts);
  // console.log(products);
  return (
    <div className="w-full">
      <AdvCarousel></AdvCarousel>
      <h2 className="text-3xl text-center font-semibold my-4 bg-pink-200 py-2 rounded-md">{brandName}</h2>
      
        {itemNumber ? (
          <><div className="grid md:grid-cols-2 gap-4 mb-8">
            {brandProducts.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
            </div>
          </>
        ) : (
          <>
            <div className="m-6 w-full"><p className="text-2xl text-center">Products Not Found</p></div>
          </>
        )}
      
    </div>
  );
};

export default BrandDetails;
