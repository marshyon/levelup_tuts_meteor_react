import React from 'react';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>Resolutions App</h2>
      <nav>
        <a href="/">Resolutions</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main>
    {content}
    </main>
  </div>
)
