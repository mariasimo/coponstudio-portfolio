import React from 'react';
import StyledWorks from '../styled-components/styledWorks';


const Works = ({ works }) => (
  <StyledWorks>
    <div className='container'>
      {works.map(work => (
      <article className="work-item" key={work.id}>
        <div className="wrapper">
          <div className="overlay">{work.Title}</div>
          <img
            src={`http://localhost:1337${work.featureImage.url}`}
          />
        </div>
      </article>
      ))}
    </div>
  </StyledWorks>
);

export default Works;
