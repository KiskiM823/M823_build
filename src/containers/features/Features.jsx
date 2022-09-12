import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improve Trust for Investors',
    text: 'A laid out plan to manage risk is paramount in this space right now. Give your clients peace of mind knowing their assets are protected',
  },
  {
    title: 'Capitalize on the Next Cycle',
    text: 'Use metrics to your advantage. Crypto is evolving in real time and requires the most up to date information.',
  },
  {
    title: 'Enable Growth in this Ecosystem',
    text: 'The Fundamentals of Digital Assets are still being established, and utilizing a platform to protect users is important to foster growth.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now. Prepare yourself for what&apos;s next.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
