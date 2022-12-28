import React from 'react';
import PropTypes from 'prop-types';
import './Century.css';


class Century extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          data: this.props.dataParentToChild
      }
  }

  render(){
      const {data} = this.state;
      return(
          <div className='text-center mt-3'>
            <br/>
            <h1 className='century-title text-center'><span className='mx-3'>

              {data}
            </span>
            </h1>
          </div>
      )
  }
}

Century.propTypes = {};

Century.defaultProps = {};

export default Century;
