import React from 'react';
import TextDescription from '../components/TextDescription';
import Events from '../components/Events';
import './Pages.css'

const VillageHall = () => (
    <div className="eventspage">
        <Events type="Village Hall"/>
        <TextDescription content={<div>
            <p>Welcome to Chelwood Village Hall website.</p>
            <p>Once the Chelwood village Parish school the hall offers a 13m x
            5m function room. The hall can offer the following facilities:</p>
            <ul>
                <li>Kitchen</li>
                <li>Toilets</li>
                <li>Car parking for 10 cars</li>
            </ul>
          <p> The village hall is available for hire all year round. The hall
            may be hired for the day, or for just the morning, afternoon or
            evening. Please <a href="booking.php">click here NEEDS FIXING</a> to see the current
            hire rates.</p>
          <br/>
          <p>COMMITTEE</p>
          <p>Chelwood Village Hall is a Registered Charity (No. 283572) and is
            managed by a committee of local villagers, responsible<br/>
            for the daily operation, and reporting to the Trustees of the Charity.</p>
          <p>Should you wish to raise an issue or make a suggestion to the committee,
            please contact Pat
            Harrison.<br/>
            <strong>Telephone:</strong> 01761 490218<br/>
          </p>
        </div>}/>
    </div>
);

export default VillageHall;
