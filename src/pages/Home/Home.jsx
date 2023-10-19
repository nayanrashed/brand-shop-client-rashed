import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import BrandCard from "./BrandCard";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h2 className="">Home Page</h2>
      <div className=" grid md: grid-cols-2 gap-8 my-8">
        {brands?.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
