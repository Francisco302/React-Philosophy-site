import React from 'react';
import PropTypes from 'prop-types';
import './Philosopher.css';
import profileImg from '../../img/profile.jpg';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

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
          <Col>
             <Link to="/philosopher">
              
              <Image src={image}/>
             </Link>
              {name}
              
          </Col>
      )
  }
}

Philosopher.propTypes = {};

Philosopher.defaultProps = {};

export default Philosopher;
