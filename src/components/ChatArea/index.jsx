import React, {useState, useEffect} from "react";
import "./ChatArea.css";
import Compose from "../Compose";
import tempMessages from "../Messages";
import moment from "moment";
import MessageBubble from "../MessageBubble";

const MY_USER_ID = 'apple';

function ChatArea(){
    // const newmessages = tempMessages.map((x)=>{ return x.message;})
    // console.log(newmessages);
    const [messages, setMessages] = useState([])

    function addMsg(vat){
        var obj = {
            id: tempMessages.length + 1,
            author: 'apple',
            message: vat,
            timestamp: new Date().getTime()
          };
        tempMessages.push(obj);
        console.log(tempMessages);
        setMessages([...tempMessages])
    }
    
    const getMessages = () => {
         setMessages([...messages, ...tempMessages])
     }
     useEffect(() => {
        if(messages.length === 0){
            getMessages();
        }
    },[getMessages]);


  const renderMessages = () => {

    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <MessageBubble
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }
    // getMessages();
    return tempMessages;
  }
    return (
        <div className="mainbar">
            <header>ChatArea <span><button class="btn btn-danger" style={{fontSize: "xx-large"}}>End Chat</button></span></header>
            <div className="subspace">
                <div className="message-container">{renderMessages()}</div>
            </div>
            <Compose 
                callback = {addMsg}
            />
        </div>
    );
}

export default ChatArea;