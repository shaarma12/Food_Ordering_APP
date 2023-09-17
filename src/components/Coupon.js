import discount from "../../images/discount.png";

const Coupon = ({ copon, off, para }) => {
  return (
    <>
      <div className="percent">
        <div className="discount">
          <img src={discount} />
          <h3>{off}</h3>
        </div>

        <p>
          {copon} | {para}
        </p>
      </div>
    </>
  );
};
export default Coupon;
