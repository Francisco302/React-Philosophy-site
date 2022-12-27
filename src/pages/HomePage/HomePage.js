import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';


import Century from '../../components/Century/Century';
import Category from '../../components/Category/Category';
import Philosopher from '../../components/Philosopher/Philosopher';

import {
  platonImg,
  aristotlesImg
} from '../../img/index';

const PagesHomePage = () => (
  <div className="pages/HomePage">
    <Century dataParentToChild={1998} />
    <Category theme={'Pos Sofistas'}>
      <Philosopher name={'Platon'} image={platonImg} />
      <Philosopher name={'Aristoteles'} image={aristotlesImg} />
      <Philosopher name={'Platon3'} />
    </Category>

    <Century dataParentToChild={1998} />

  </div>
);

PagesHomePage.propTypes = {};

PagesHomePage.defaultProps = {};

export default PagesHomePage;
