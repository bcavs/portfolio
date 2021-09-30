import { Cottage, Poolside, Studio } from "../../../../images/bahamas-dashboard/orange-hill"
import { FrontPatio, FrontSign, PoolArea } from "../../../../images/bahamas-dashboard/orange-hill"
import { HotelContent, HotelImages, HotelInformation, Image, RoomImage, RoomsContent, StyledRoomCard } from "./AccomodationWidget.styled"
import { Widget, WidgetHeader } from "../WidgetBase.styled"

import React from 'react';

// import PropTypes from 'prop-types';

const rooms = [
  {
    name: "Poolside",
    img: {Poolside}
  },
  {
    name: "Cottage",
    img: {Cottage}
  },
  {
    name: "Studio",
    img: {Studio}
  },
]

const AccomodationWidget = (props) => (
  <Widget>
    <WidgetHeader>Accomodation</WidgetHeader>
    <HotelContent>
      <HotelInformation>
        <h5>Orange Hill</h5>
        <p>West Bay Street, Nassau, Bahamas</p>
        <a href="mailto:info@orangehill.com">info@orangehill.com</a>
        <p>(242) 327-7157</p>
      </HotelInformation>
      <HotelImages>
        <Image src={FrontPatio}/>
        <Image src={FrontSign}/>
        <Image src={PoolArea}/>
      </HotelImages>
    </HotelContent>
    <RoomsContent>
      {rooms.map((room, i) => (
        <RoomCard img={room.img} name={room.name} />
      ))}
      {/* <RoomCard img={Poolside} name="Poolside" />
      <RoomCard img={Studio} name="Studio" />
      <RoomCard img={Cottage} name="Cottage" /> */}
      {/* <RoomCard/> */}
    </RoomsContent>
  </Widget>
);

// AccomodationWidget.propTypes = {
//   // bla: PropTypes.string,
// };

// AccomodationWidget.defaultProps = {
//   // bla: 'test',
// };

export default AccomodationWidget;

const RoomCard = (props) => (
  <StyledRoomCard>
    <h4>{props.name}</h4>
    <RoomImage src={props.img}/>
  </StyledRoomCard>
)
