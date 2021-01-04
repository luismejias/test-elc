/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';
import { getData } from './productService';
const lodash = require('lodash');

let props = {};
const App = () => {
  const [productList, setProductList] = useState(null);
  const [productsLength, setProductsLength] = useState(null);
  const [limit, setLimit] = useState(3);
  const [skip, setSkip] = useState(0);
  const [searching, setSearching] = useState('');

  const onSearch = (event) => {
    const auxSearching = event.target.value;
    setSearching(auxSearching);
    if (auxSearching && auxSearching.length >= 3) {
      getData(searching, 3, skip)
        .then(lodash.debounce((res) => {
          setProductList(res.data);
          setProductsLength(res.length);
        }), 250);
    } else {
      props = {};
      setProductList([]);
      setProductsLength([]);
    }
  }

  const prevPage = () => {
    if(skip > 0)
    setSkip(skip - limit);
    console.log('prevPage SKIP ', skip, searching);

  }

  const nextPage = () => {
    if(skip < limit)
    setSkip(skip + limit)
    console.log('nextPage SKIP ', skip, searching);

  }

  props = {
    productList: productList,
    length: productsLength,
    prevPage,
    nextPage
  }

  return (
    <div className="App">
      <Menu onSearch={onSearch} />
      <Home {...props} />
    </div>
  );

}
// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
