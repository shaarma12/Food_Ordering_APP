import discount from "../../images/discount.png";

const Coupon = ({ copon, off, para }) => {
  return (
    <>
      <div className="flex flex-col border-[0.1px] border-gray-300 mx-[0.35rem] rounded-lg cursor-pointer">
        <div className="ml-2 flex w-52">
          <img className="w-6 h-5 mr-2 mt-3" src={discount} />
          <h3 className="mt-2 font-bold text-[1rem] text-gray-700">{off}</h3>
        </div>

        <p className="ml-2 text-[0.73rem] pt-1 pb-2 font-bold text-slate-500 w-56">
          {copon} | {para}
        </p>
      </div>
    </>
  );
};
export default Coupon;
