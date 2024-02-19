import { Coupon_IMG } from "../utils/constant";

const Coupon = ({ values }) => {
  const { header, couponCode, description, offerLogo } = values?.info;
  return (
    <>
      <div className="flex flex-col border-[0.1px] border-gray-300 mx-[0.35rem] rounded-lg cursor-pointer">
        <div className="ml-2 flex w-52">
          <img className="w-6 h-5 mr-2 mt-3" src={Coupon_IMG + offerLogo} />
          <h3 className="mt-2 font-bold text-[1rem] text-gray-700">{header}</h3>
        </div>

        <p className="ml-2 text-[0.73rem] pt-1 pb-2 font-bold text-slate-500 w-56">
          {couponCode} | {description}
        </p>
      </div>
    </>
  );
};
export default Coupon;
