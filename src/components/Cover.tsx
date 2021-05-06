import React, { FC } from 'react';
import './Cover.less';


import { coverText } from './texts';

const Cover: FC = () => (
  <div className="Cover" id="home">
    <h1 className="vertical-align-middle white-text">
      {coverText.mainTitle}
    </h1>
    <h2 className="vertical-align-middle white-text">
      {coverText.subTtile}
    </h2>
  </div>
);

export default Cover;
