import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_AUTH_URL } from "../../api/config";
import axios from "axios";
import "./Payment.css";
import { Footer } from "../../components/Footer";
import LogInHeader from "../Search/LogInHeader";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const features = [
    "Unlimited access to premium features",
    "24/7 customer support",
    "Priority updates",
    "Get access to 3000+ creatives",
    "Filter by brand, keyword, industry, format",
    "Wishlist and save",
  ];

  const pricing = {
    // monthly: '$29.99',
    yearly: "₹7999",
  };

  useEffect(() => {
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    setStripePromise(loadStripe(publishableKey));
  }, []);

  useEffect(() => {
    const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));
    axios
      .post(
        `${BASE_AUTH_URL}/api/v1/stripe/checkout-payment`,
        {},
        {
          headers: {
            Authorization: accessAuth?.accessToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        let clientSecret = response.data.client_secret;
        setClientSecret(clientSecret);
      });
  }, []);

  return (
    <>
      <LogInHeader />

      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-5 py-6 ">
        <div className="article">
          <div className="premium-product-checkout">
            <h2>Premium Purple Maze</h2>
            <div className="feature-list">
              <h3>Key Features:</h3>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="pricing">
              <h3>Pricing:</h3>
              <div className="pricing-options">
                {/* <div className="option">
            <p>Monthly Subscription:</p>
            <span>{pricing.monthly}</span>
          </div> */}
                <div className="option">
                  <p>Yearly Subscription:</p>
                  <span>{pricing.yearly}</span>
                </div>
              </div>
              <p>* Prices are in INR</p>
            </div>
          </div>
        </div>
        <div className="premium-upgrade">
          <h1 className="premium-upgrade-title">
            Upgrade to Purplemaze Premium
          </h1>
          {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <div className="checkout-container">
                <CheckoutForm />
              </div>
            </Elements>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
