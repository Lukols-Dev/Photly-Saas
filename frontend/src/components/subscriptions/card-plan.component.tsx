import "./card-plan.component.css";

import { FC } from "react";
import { Button } from "antd";
import { SubscriptionService } from "../../services/subscriptions.service";
import { getStripe } from "../../config/stripe";

interface CardPlanProps {
  title: string;
  size: number;
  price: number;
  featuresList: string[];
  recomendet?: boolean;
  active?: boolean;
}

export const CardPlan: FC<CardPlanProps> = (props) => {
  const goToCheckout = async () => {
    const stripe = await getStripe();

    if (stripe) {
      const stripeResp = await SubscriptionService.createCheckoutSession();

      const { error } = await stripe.redirectToCheckout({
        sessionId: stripeResp,
      });
      console.log("Stripe checkout error", error);
    }
  };

  return (
    <div
      {...props}
      className={
        props.recomendet ? "cardPlan cardPlan--recomendet" : "cardPlan"
      }
    >
      {props.recomendet && (
        <span className="cardPlan__recomendet">Polecany</span>
      )}
      <h2 className="cardPlan__title">{props.title}</h2>
      <p className="cardPlan__size">{props.size} GB</p>
      <p className="cardPlan__price">{props.price} $ monthly</p>
      {props.active ? (
        <Button className="cardPlan__button" disabled>
          Active Plan
        </Button>
      ) : (
        <Button
          className="cardPlan__button"
          type="primary"
          onClick={goToCheckout}
        >
          Rozpocznij
        </Button>
      )}
      <ul>
        {props.featuresList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
