import React from 'react';
import { Col, Row } from 'antd';
import OverlayGrid from './OverlayGrid';
import './Portfolio.less';
import { portfolioData, PortfolioItem } from './texts';

const Portfolio = () => {
  return (
    <div id="portfolio" className="Portfolio">
      <h2 className="text-center subtitle">Portfolio</h2>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {portfolioData.map((item: PortfolioItem, i) => (
          <Col className="image-col" xs={24} sm={12} md={8}>
            <OverlayGrid {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
