import React from 'react';
import PropTypes from 'prop-types';

import Grubhub from '../../images/svg/Logo-Grubhub.svg';
import AubryLane from '../../images/svg/Logo-AubryLane.svg';
import HFPG from '../../images/svg/Logo-HFPG.svg';
import Javahouse from '../../images/svg/Logo-Javahouse.svg';
import RadioFlyer from '../../images/svg/Logo-RadioFlyer.svg';
import Splenda from '../../images/svg/Logo-Splenda.svg';

import LogoRow from '../../images/svg/Logos-Row.svg'
import Logo2Row from '../../images/svg/Logos-2-Row.svg'


import './PreviousEmployers.scss';

const PreviousEmployers = (props) => (

  <section className="md:mt-6">
    <h2 className="uppercase text-center text-electric-purple font-bold">Who I've built for</h2>
    <div className="flex justify-center mt-4">
      <LogoRow className="hidden lg:block"/>
      <Logo2Row className="hidden sm:block lg:hidden"/>
    </div>
    <div id="logo-container" className="flex flex-col items-center justify-center sm:hidden">
        <Grubhub/>
        <RadioFlyer/>
        <Splenda/>
        <HFPG/>
        <Javahouse/>
        <AubryLane/>
    </div>
  </section>
);

PreviousEmployers.propTypes = {
  // bla: PropTypes.string,
};

PreviousEmployers.defaultProps = {
  // bla: 'test',
};

export default PreviousEmployers;
