import { HotelContent, HotelImages, HotelInformation, Image } from "./AccomodationWidget.styled"

import PropTypes from 'prop-types';
import React from 'react';
import { WidgetHeader } from "../WidgetBase.styled"

const AccomodationWidget = (props) => (
  <div>
    <WidgetHeader>Accomodation</WidgetHeader>
    <HotelContent>
      <HotelInformation>
        <h5>Orange Hill</h5>
        <p>West Bay Street, Nassau, Bahamas</p>
        <p>info@orangehill.com</p>
        <p>(242) 327-7157</p>
      </HotelInformation>
      <HotelImages>
        <Image src="https://source.unsplash.com/random"/>
        <Image src="https://source.unsplash.com/daily"/>
        <Image src="https://source.unsplash.com/weekly"/>
      </HotelImages>
    </HotelContent>
  </div>
);

AccomodationWidget.propTypes = {
  // bla: PropTypes.string,
};

AccomodationWidget.defaultProps = {
  // bla: 'test',
};

export default AccomodationWidget;
