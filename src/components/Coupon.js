import { Coupon_IMG } from "../utils/constant";

const Coupon = ({ values }) => {
  const { header, couponCode, description, offerLogo } = values?.info;
  return (
    <>
      <div className="flex flex-col border-[0.1px] border-gray-300 mx-[0.35rem] rounded-lg cursor-pointer">
        <div className="ml-2 flex md:w-52 w-72">
          <img className="md:w-6 w-7 md:h-5 h-6 mr-2 mt-3" src={Coupon_IMG + offerLogo} />
          <h3 className="md:mt-2 mt-[0.6rem] font-bold md:text-[1rem] text-2xl text-gray-700">{header}</h3>
        </div>

        <p className="ml-2 md:text-[0.73rem] text-md pt-1 pb-2 font-bold text-slate-500 md:w-56 w-72">
          {couponCode} | {description}
        </p>
      </div>
    </>
  );
};
export default Coupon;
