import React from 'react';
import './Notifications.css'
import closeIcon from './close-icon.png'
import {getLatestNotification} from './utils';

function Notifications() {
    return (
      <div className="Notifications">
          <p style={{display:'inline',}}>Here is the list of notifications</p>
          <ul>
            <li data='default' style={{paddingLeft:'5px'}}>New course available</li>
            <li data='urgent'style={{paddingLeft:'5px'}}>New resume available</li>
            <li data='urgent' dangerouslySetInnerHTML={{__html:getLatestNotification()}}></li>
          </ul>
          <button aria-label='Close' style={{display: 'inline', float: 'right', margin:'-115px -5px 0px 0px', border: 'none', background:'white'}} onClick= {console.log('Close button has been clicked')}>
            <img src={closeIcon} alt='close' width='10px'/>
          </button>
      </div>
    );
  }
  
  export default Notifications;