import React from 'react';

const Cover = () => (
  <div>
  <div className="cover">
    <div className="addresses" style={{display: 'block', overflow: 'hidden',}}>
      <div className="address address--to">
        For: Beth Francis,<br/>
        Head of Marketing,<br/>
        Sabre Retail Limited t/a Mint Velvet
      </div>
      <div className="address address--from">
        The Dragon Drop Development Company,<br/>
        20-22 Wenlock Road,<br/>
        London, N17GU<br/>
        <br/>
        Company Number: 09365664
      </div>
    </div>
    <h1 className="cover__jumbo">Proposal</h1>
    <div className="cover__title">
      <h4 className="h4">Checkout Recovery for Mint Velvet</h4>
    </div>
    <div className="cover__details">
      <div className="cover-detail">
        <h5 className="cover-detail__heading">Prepared for:</h5>
        <p className="cover-detail__content">
          Beth Francis,<br/>
          Stewart Grant
        </p>
      </div>
      <div className="cover-detail">
        <h5 className="cover-detail__heading">Prepared by:</h5>
        <p className="cover-detail__content">
          Jonathan Bowen,<br/>
          Adam Dawkins
        </p>
      </div>
      <div className="cover-detail">
        <h5 className="cover-detail__heading">Issued on:</h5>
        <p className="cover-detail__content">
          25th January 2016,
        </p>
      </div>
    </div>
  </div>
  <div style={{color: 'rgba(0,0,0,.44)', textAlign: 'center', fontFamily: 'Georgia, serif', padding: 20}}>
    &darr; Scroll down to read the proposal &darr;
  </div>
  </div>
);

export default Cover;
