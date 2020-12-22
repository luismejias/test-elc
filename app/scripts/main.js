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
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';
import { getData } from './productService';



/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
    this.onSearch = this.onSearch.bind(this);
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
  */
  onSearch(event) {
    let productResult;
    const searching = event.target.value;
    getData()
      .then((res) => {
        productResult = res.data.filter((product) => {
          return product.name.toLowerCase().includes(searching.toLowerCase())
         });
         this.setState({ productList: productResult});
      });
  }

  render() {
    return (
      <div className="App">
        <Menu onSearch={this.onSearch} />
        <Home productList={this.state.productList} />
      </div>
    );
  }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
