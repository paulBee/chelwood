import React from 'react';
import './Events.css'
import Event from './Event';
import events from '../data/events/villageHall';

const Events = (props) => (
    <div className="events">
        <h3>{props.type} Events</h3>
        {events.map((data) => <Event key={data.title} data={data}/>)}
    </div>)

export default Events;
