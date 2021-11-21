import React from 'react';
// import ReactDOM from 'react-dom';
import StatsCard from './statistics';

export default function StatsList({data}) {
    return (
        <ul>
      {data.map(el =>
        <li key={el.id}>
       <StatsCard
      label={el.label}
      percentage={el.percentage}
          />
          </li>
        )}
          
    </ul>
    )
}

