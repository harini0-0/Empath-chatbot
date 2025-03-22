import React from 'react';
import moment from 'moment';
import './MessageBubble.css';

export default function MessageBubble(props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = props;

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
      <div className={[
        'message',
        
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : isMine ? 'not-start-cust': 'not-start-exe'}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          {startsSequence && !isMine ? <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="Avatar" class="avatar" style={{margin: "10px"}}></img> : null}
          <div className="bubble" title={friendlyTimestamp}>
            { data.message }
          </div>
          {startsSequence && isMine ? <img src='https://cdn-icons-png.flaticon.com/512/194/194917.png' alt="Avatar" class="avatar" style={{margin: "10px", marginTop: "20px"}}></img> : null}
          {/* feedback buttons */}
          {!isMine ? 
          <div>
          <button className='feedback-btn'><i class="fas fad fa-thumbs-down"></i></button><button className='feedback-btn'><i class="fas fad fa-thumbs-up"></i></button>
          </div> : null}
        </div>
      </div>
    );
}