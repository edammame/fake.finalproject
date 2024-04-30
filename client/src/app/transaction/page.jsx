import AddressComponents from "./address";
import ShippingComponents from "./shippingmethos";

function Checkout() {
  return (
    <>
      <div className=" bg-[#f2f2f2] p-10">
        <AddressComponents />
        <br />
        <hr />
        <ShippingComponents />
      </div>
    </>
  );
}
export default Checkout;
