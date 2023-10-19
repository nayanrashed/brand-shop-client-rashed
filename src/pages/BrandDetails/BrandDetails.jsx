import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";


const BrandDetails = () => {
    const products= useLoaderData();
    
    const {brandName}= useParams();

    const brandProducts= products.filter(product=>brandName==product.brand)
    console.log(brandProducts);
    // console.log(products);
    return (
        <div>
            <h2 className="text-3xl">Brand Details:{brandName}</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                {
                    brandProducts.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;