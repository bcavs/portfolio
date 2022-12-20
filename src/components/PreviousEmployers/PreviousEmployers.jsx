import React from 'react';
import PropTypes from 'prop-types';

import Grubhub from '../../images/svg/Logo-Grubhub.svg';
import Foxtrot from '../../images/svg/Logo-Foxtrot.svg';
import AubryLane from '../../images/svg/Logo-AubryLane.svg';
import HFPG from '../../images/svg/Logo-HFPG.svg';
import Javahouse from '../../images/svg/Logo-Javahouse.svg';
import RadioFlyer from '../../images/svg/Logo-RadioFlyer.svg';
import Splenda from '../../images/svg/Logo-Splenda.svg';

import New2Row from '../../images/svg/New-2-Row.svg'


import './PreviousEmployers.scss';

const PreviousEmployers = (props) => (

  <section className="md:mt-6">
    <h2 className="uppercase text-center text-electric-purple font-bold">Who I've worked for</h2>
    <div className="flex justify-center mt-4">
      <New2Row className="hidden sm:block"/>
    </div>
    <div id="logo-container" className="flex flex-col items-center justify-center sm:hidden">
        <Foxtrot/>
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
