import { MessageEntity } from '../../domain/messages.entities';
import classes from './BackgroundChat.module.css';
import InputForm from '../InputForm/InputForm';
import MessageList from '../MessageList/MessageList';
import { useState, useRef, useEffect } from 'react';

export default function BackgroundChat({ room_uuid }: { room_uuid: number }) {
  const [messages, setMessages] = useState<MessageEntity[]>([]);

  const createMessage = (newMessage: MessageEntity) => {
    setMessages([...messages, newMessage]);
  };

  const socket = useRef<WebSocket>();
  useEffect(() => {
    socket.current = new WebSocket(`ws://localhost:8000/rooms/${room_uuid}`);
    socket.current.onopen = () => console.log('ws opened');
    socket.current.onclose = () => console.log('ws closed');

    const wsCurrent = socket.current;

    return () => {
      wsCurrent.close();
    };
  }, []);

  /* When the socket is created, this useEffect will catch the question from server. */
  useEffect(() => {
    if (!socket.current) return;
    socket.current.onmessage = (e) => {
      const message: MessageEntity = { text: e.data, type: false };
      createMessage(message);
      console.log('question mes:', e.data);
    };
  }, [messages]);

  const sendMessage = (mes: string) => {
    socket.current?.send(mes);
  };

  return (
    <div className={classes.BackgroundChat}>
      <MessageList messages={messages} />
      <InputForm send={sendMessage} create={createMessage} />
    </div>
  );
}
