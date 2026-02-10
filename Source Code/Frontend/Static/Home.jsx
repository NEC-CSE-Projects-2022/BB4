import React from "react";
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to TransAugNet</h1>
      <p>Your AI-powered skin lesion classification assistant.</p>

      <ul>
        <li><span>Real-time Classification:</span> Upload images and get instant diagnosis.</li>
        <li><span>High Accuracy:</span> Leveraging deep learning for precise results.</li>
        <li><span>User-Friendly:</span> Simple interface for both medical professionals and general users.</li>
        <li><span>Data-Driven Insights:</span> Provides precautionary advice based on prediction.</li>
        <li><span>Flexible Platform:</span> Accessible from any device via web interface.</li>
      </ul>
    </div>
  );
}
