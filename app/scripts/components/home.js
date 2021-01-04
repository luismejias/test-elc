/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';
import Card from '../components/card';

const Home = (props) => {
  let subContent = ''
  const component = props.productList ? <Card product={props.productList} /> : <Card />;
  const showCount = props.length ? <div className="content__count"> Displaying {props.productList.length} of {props.length} Results</div> : '';
  const buttons = <div className="content__buttons">
    <div className="content__button" onClick={props.prevPage}>Prev</div>
    <div className="content__button" onClick={props.nextPage}>Next</div>
  </div>
  subContent = (props.productList && props.productList.length > 0) ? <div className="content__sub-content">
    {showCount}
    {buttons}
  </div> : '';
  return (
    <section id="home">
      <div className="content">
        {subContent}
        {component}
      </div>
    </section>
  );
}
// Export out the React Component
module.exports = Home;