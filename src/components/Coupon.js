import discount from "../../images/discount.png";

const Coupon = ({ copon, off, para }) => {
  return (
    <>
      <div className="flex flex-col w-96 border border-gray-300 mx-2 rounded-lg">
        <div className="  flex">
          <img className="w-11 h-8" src={discount} />
          <h3>{off}</h3>
        </div>

        <p className="text-[0.8rem]">
          {copon} | {para}
        </p>
      </div>
    </>
  );
};
export default Coupon;
