/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';
import Card from '../components/card';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
  */

  render() {
    const component = this.props.productList ? <Card product={this.props.productList} /> : <Card />;
    return (
      <section id="home">
        <div className="content">
          {component}
        </div>
      </section>
    );
  }


}

// Export out the React Component
module.exports = Home;