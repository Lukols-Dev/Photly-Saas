import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LNfR6A31XL5oAWC8yAy0AluOs6QvN2TMFNH40vG4T4h2S4ZyRkbxM6m6sD2joWMmBU9B9H9WvSKWsiE5bkRuWoZ00uBd5nof6"
    );
  }

  return stripePromise;
};
