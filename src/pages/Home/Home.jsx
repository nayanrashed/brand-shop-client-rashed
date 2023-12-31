import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import BrandCard from "./BrandCard";
import Offers from "./Offers";
import Review from "./Review";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="dark:bg-zinc-800 pt-4">
      <Banner></Banner>
      <Offers></Offers>
      <h2 className="text-center text-2xl font-semibold mt-6 dark:text-white">Our Trusted Partners</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 my-8 px-2">
        {brands?.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
      <Review></Review>
    </div>
  );
};

export default Home;
