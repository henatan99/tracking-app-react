import React from 'react';
import HeaderNav from '../components/headerNav';

const Home = () => (
  <div className="home">
    <HeaderNav />
    <main className="home-main">
      <h1 className="home-title">Track Your Health</h1>
      <p>
        This app is all about keeping you heathy
      </p>
      <p>It lets you track your health with day to day essential indicators</p>
      <h3>Be your own doctor!</h3>
      <img src="https://img.icons8.com/dotty/80/000000/health-calendar.png" alt="front-img" />
    </main>
  </div>
);

export default Home;
