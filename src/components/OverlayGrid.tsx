import React from 'react';

import './OverlayGrid.less';
import { PortfolioItem } from './texts';
import { Col, Row, Card } from 'antd'


const OverlayGrid = ({ imageUrl, title, description, technologies }: PortfolioItem) => (
  <Card>
    <Row className="row-pad">
      <Col className="image-col" xs={6}>
        <img src={imageUrl}
          alt="Failed to load"
          className="image" />
      </Col>
      <Col className="text-col" xs={18}>
        <h2 className="black-text">{title}</h2>
        <p className="black-text">{description}</p>
        <p className="black-text">Technologies: {technologies}</p>
      </Col>
    </Row>
  </Card>
);

export default OverlayGrid;
