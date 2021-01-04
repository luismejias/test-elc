/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';

const Card = (props) => {
  const list = props.product ? <div className="card__central-text">
    {
      props.product.map(data => (
        <div className="card__item" key={data._id}>
          <div className="card__name"> {data.name}</div>
          <div className="card__about"> {data.about}</div>
          <div> <img className="card__img" src={data.picture} ></img> </div>
        </div>
      ))}
  </div> : '';
  return (
    <div className="card">
      {
        list
      }
    </div>
  )
}
module.exports = Card;