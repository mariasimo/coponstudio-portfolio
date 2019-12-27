import React from 'react';
import StyledWorks from '../styled-components/styledWorks';
import WorkItem from './workItem';

const Works = ({ works, toggleInfo, showInfo }) => (
  <StyledWorks>
    <div className='container'>
      {works.map(work => (
        <WorkItem work={work} key={work.id}></WorkItem>
      ))}
    </div>
  </StyledWorks>
);

export default Works;
