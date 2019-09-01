import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Star extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.RatingHandler(nextValue);
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div className="etoile" >
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}


export default Star;