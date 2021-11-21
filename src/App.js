import React from 'react'
import Usercard from './components/social-profile'
import user from './social-profile/user.json'

// import StatsList from './components/statList'
import data from './statistics/data.json'
import StatsCard from './components/statistics'

export default function App() {
  return (
    // < Usercard items = { user } />
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
 
    );
}