import React from 'react'

import './FeatureCard.css'
import { Link, BrowserRouter } from 'react-router-dom';

const FeatureCard = (props) => {
  const val=props.card;
  const styles ={"border-bottom": `4px solid ${val.color}`}
  return (
  //  <BrowserRouter>
     <Link to={val.route} className='feactureCard' style={styles} >
        <img src={val.img} alt="" />
        <h2>{val.featureName}</h2>
        <span>{val.desc}</span>
    </Link>
  //  </BrowserRouter>
  )
}

export default  FeatureCard