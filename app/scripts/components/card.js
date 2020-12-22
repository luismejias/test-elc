/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof Card
    */
    render() {
        const list = this.props.product ? <div className="card__central-text">
            {
                this.props.product.map(data => (
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

        );
    }
}

// Export out the React Component
module.exports = Card;