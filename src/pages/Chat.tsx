import React from 'react';
import InputForm from '../components/InputForm/InputForm';
import BackgroundChat from '../components/BackgroundChat/BackgroundChat';

import { useLocation } from 'react-router-dom';

function Chat() {
  const { state } = useLocation();
  // console.log(state.room.uuid);
  return (
    <div>
      {/* <div>{location.state.room}</div> */}
      <BackgroundChat room_uuid={state.room.uuid} />
    </div>
  );
}

export default Chat;
