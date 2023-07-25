import "./subscriptions.page.css";

import { SettingOutlined } from "@ant-design/icons";
import { FC } from "react";
import { CardPlan } from "../../../components/subscriptions/card-plan.component";

export const AuthSubscriptionPage: FC = () => {
  const featuresList = ["5 GB miejsca na dane", "Kontrola dostępu"];
  return (
    <div className="authSubscriptionPage">
      <div className="authSubscriptionPage__header">
        <SettingOutlined className="icon" />
        <h1>Subscription Plans</h1>
      </div>
      <div className="authSubscriptionPage__content">
        <CardPlan
          title="Free"
          size={5}
          price={29.99}
          active
          featuresList={featuresList}
        />
        <CardPlan
          title="Standard"
          size={25}
          price={50}
          recomendet
          featuresList={featuresList}
        />
        <CardPlan
          title="Premium"
          size={100}
          price={100}
          featuresList={featuresList}
        />
      </div>
    </div>
  );
};
