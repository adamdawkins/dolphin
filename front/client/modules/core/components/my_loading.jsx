import React from 'react';

const MyLoading = () => (
  <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{display: 'block', margin: '20 auto'}}>
      <img src="/ajax-loader.gif"/>
    </div>
    <div>
      <p className="p">This will be worth the wait...</p>
    </div>
  </div>
);

export default MyLoading;
