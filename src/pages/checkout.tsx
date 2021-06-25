import Header from "../components/Header";
import Image from "next/image";
import checkoutBanner from "../../public/images/checkout_banner.png";

const Checkout = () => {
  return (
    <div className="bg-gray-100">
      <Header />

      <div className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src={checkoutBanner}
            alt="checkout banner"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
          </div>
        </div>

        {/* Right */}
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
