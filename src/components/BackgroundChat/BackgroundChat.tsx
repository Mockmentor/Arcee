import classes from './BackgroundChat.module.css';
import InputForm from '../InputForm/InputForm';
import MessageList from '../MessageList/MessageList';
import { useState } from 'react';

export default function BackgroundChat() {
  const [messages, setMessages]: any = useState([]); // kill any

  const createMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className={classes.BackgroundChat}>
      <MessageList messages={messages} />
      <InputForm create={createMessage} />
    </div>
  );
}
