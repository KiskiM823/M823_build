import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is M823" text="Analytics Platform built by experts in the field. By leveraging traditional processes we have created a way to ingest data and present users with insightful metrics. Using advanced modelling techniques, M823 provides users with algorithmic analysis which protect them from price major liquidation events." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Enabling You to Take Advantage of Digital Assets Potential</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Price Analysis" text="Providing accurate and usable price data." />
      <Feature title="Fundamental Analysis" text="Viewing crypto through the lens of traditional means - gaining insight into thing such as P/E and Speculative Contribution" />
      <Feature title="Algorithmic Analysis" text="Using propiertary simulation technology, M823 offers protection from price cascades and liquidation events. Our technology utilizes ABM (Agent Based Modelling) to simulate events based on different parameters within the blockchain." />
    </div>
  </div>
);

export default WhatGPT3;
