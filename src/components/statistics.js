// import React from 'react';

export const Statistics = ({title, stats}) => {
  return (
      <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
      {stats.map(el =>
        <li class="item" key={el.id}>
       <span class="label">{el.label}</span>
      <span class="percentage">{el.percentage}%</span>
          </li>
        )}
      </ul>
      </section>
    )
}

