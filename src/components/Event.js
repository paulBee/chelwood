import React from 'react';
import './Events.css';

const Event = (props) => {
    let event = props.data;
    return (<div className="event">
                <h5 className="title">{event.title}</h5>
                <div className="location">{`Location: ${event.location}`}</div>
                <div className="date">{`When: ${event.date}`}</div>
            </div>)
}


export default Event;
