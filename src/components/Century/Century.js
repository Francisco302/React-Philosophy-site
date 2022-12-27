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
          <div>
              {data}
          </div>
      )
  }
}

Century.propTypes = {};

Century.defaultProps = {};

export default Century;
