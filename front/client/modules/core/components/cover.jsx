import React from 'react';

const Cover = ({forName, forRole, forCompanyName, title, version, client }) => (
  <div>
  <div className="cover">
    <div className="addresses" style={{display: 'block', overflow: 'hidden',}}>
      <div className="address address--to">
        For: {forName}<br/>
        {forRole ? (<span>Head of Marketing,<br/></span>) : null}
        {forCompanyName}
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
      <h4 className="h4">{title}<br/>for {client}</h4>
      <span style={{color: 'rgba(0,0,0,.44)'}}>v{version}</span>
    </div>
  </div>
  <div style={{color: 'rgba(0,0,0,.44)', textAlign: 'center', fontFamily: 'Georgia, serif', padding: 20}}>
    &darr; Scroll down to read the proposal &darr;
  </div>
  </div>
);

export default Cover;
