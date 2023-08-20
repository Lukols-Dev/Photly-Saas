import "./grid-elements.css";

import { Col, Row } from "antd";
import { FC } from "react";
import { Card } from "../cards/card";
import { Link } from "react-router-dom";

const style: React.CSSProperties = { background: "#0092ff" };

export const GridElements: FC = () => {
  return (
    <div className="grid">
      <Row gutter={[16, 16]}>
        <Col className="grid__row" span={4}>
          <Link to={`galleries?id=${"wae2e"}`}>
            <Card />
          </Link>
        </Col>
        <Col className="grid__row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="grid__row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="grid__row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="grid__row" span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="grid__row" span={4}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </div>
  );
};
