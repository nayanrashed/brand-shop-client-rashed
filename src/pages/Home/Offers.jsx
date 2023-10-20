import moneyBack from "../../assets/moneybank.png";
import freeShipping from "../../assets/free-shipping.png";
import discount from "../../assets/coupon.png";
import support from "../../assets/people.png";

const Offers = () => {
  return (
    <div className="my-6 ">
        <h2 className="text-center text-3xl mb-4 font-semibold dark:text-white">Our features</h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 ">
        <div className="flex shadow-md shadow-lime-100 mx-auto w-64 h-24 rounded-lg bg-orange-700">
          <img className="w-1/3 p-2 object-fill" src={freeShipping} alt="" />
          <div className="w-2/3 flex flex-col my-auto mx-2">
            <h2 className="text-xl text-white">Free Shipping</h2>
            <p className="text-white">Enjoy Frees shipping</p>
          </div>
        </div>
        <div className="flex shadow-md shadow-lime-100 mx-auto w-64 h-24 rounded-lg bg-sky-500">
          <img className="w-1/3 p-2 object-fill" src={moneyBack} alt="" />
          <div className="w-2/3 flex flex-col my-auto mx-2">
            <h2 className="text-xl text-white">Money back</h2>
            <p className="text-white">30days Money Back Policy</p>
          </div>
        </div>
        <div className="flex shadow-md shadow-lime-100 mx-auto  w-64 h-24 rounded-lg bg-yellow-500">
          <img className="w-1/3 p-3 object-fill" src={discount} alt="" />
          <div className="w-2/3 flex flex-col my-auto mx-2">
            <h2 className="text-xl text-white">Discounts</h2>
            <p className="text-white">Special Offers Running</p>
          </div>
        </div>
        <div className="flex shadow-md shadow-lime-100 mx-auto w-64 h-24 rounded-lg bg-slate-500">
          <img className="w-1/3 p-2 object-fill" src={support} alt="" />
          <div className="w-2/3 flex flex-col my-auto mx-2">
            <h2 className="text-xl text-white">Free Shipping</h2>
            <p className="text-white">Enjoy Frees shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
