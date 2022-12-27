import React from 'react';
import PropTypes from 'prop-types';
import './Philosopher.css';
import profileImg from '../../img/profile.jpg';

class Philosopher extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          name: this.props.name,
          reference: this.props.reference ,
          image: this.props.image || profileImg,
      }
  }

  render(){
      const {name, image, reference} = this.state;
      
      return(
          <div>
            <a href={reference}>
              <img src={image}/>
            </a>
              {name}
              
          </div>
      )
  }
}

Philosopher.propTypes = {};

Philosopher.defaultProps = {};

export default Philosopher;
