import "./card.css";

import { FC } from "react";
import { LockOutlined } from "@ant-design/icons";

export const Card: FC = () => {
  const isPrivate = true;

  return (
    <div className="card" title="This gallery has a password">
      <div className="card__image">
        <img
          alt="imageName"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        {isPrivate ? (
          <div className="card__image--private">
            <LockOutlined className="card__image__icon" />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="card__header">
        <p>
          Title of galerywwwwwwwwwwww sadwdwa awdawdiii kjnsfnes sen jen ne
          wdawewae
        </p>
      </div>
    </div>
  );
};
