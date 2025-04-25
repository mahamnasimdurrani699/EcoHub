import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: Math.floor(Math.random() * 1000000), // Random order number
      shippingInformation: shippingInfo,
      totalPrice: calculateTotalPrice(),
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h3 className="text-2xl font-semibold mb-6 text-center">Checkout</h3>
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Left Section */}
        <div className="md:w-2/3 space-y-6">
          {/* Billing Information */}
          <div className="border p-4 rounded-md">
            <div
              onClick={() => setBillingToggle(!billingToggle)}
              className="cursor-pointer flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {billingToggle && (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}
          </div>

          {/* Shipping Information */}
          <div className="border p-4 rounded-md">
            <div
              onClick={() => setShippingToggle(!shippingToggle)}
              className="cursor-pointer flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {shippingToggle && (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 border rounded-md"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 border rounded-md"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full p-2 border rounded-md"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            )}
          </div>

          {/* Payment Information */}
          <div className="border p-4 rounded-md">
            <div
              onClick={() => setPaymentToggle(!paymentToggle)}
              className="cursor-pointer flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold">Payment Information</h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {paymentToggle && (
              <div className="mt-4 space-y-4">
                <label className="block">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />{" "}
                  Cash on Delivery
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="payment"
                    value="dc"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />{" "}
                  Debit Card
                </label>

                {/* Debit Card Information Section */}
                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg mb-4 font-semibold">
                      Debit Card Information
                    </h3>
                    <div className="mb-4">
                      <label className="block text-gray-700">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Enter Card Number"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        name="cardHolderName"
                        placeholder="Enter Card Holder Name"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        name="expirationDate"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 space-y-6">
          {/* Order Summary */}
          <div className="border p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center mb-2"
              >
                <p>{product.name}</p>
                <p>
                  Rs{product.price} x {product.quantity}
                </p>
              </div>
            ))}
            <div className="flex justify-between items-center font-semibold mt-4">
              <span>Total Price:</span>
              <span>Rs{calculateTotalPrice().toFixed(2)}</span>
            </div>
            <button
              className="mt-6 w-full py-2 bg-red-600 text-white rounded-md"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
