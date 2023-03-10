import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';
import {
  Row,
  Col
} from 'react-bootstrap';

class Category extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        theme: this.props.theme,
          data: props.children
      }
  }

  render(){
      const {theme, data } = this.state;
      return(
          <div>
              <h1>{theme}</h1>
            <div className='row'> 
              {data}
          </div>
          </div>
      )
  }
}

Category.propTypes = {};

Category.defaultProps = {};

export default Category;
