import classes from './BackgroundChat.module.css';
import InputForm from '../InputForm/InputForm';
import MessageList from '../MessageList/MessageList';
import { useState, useRef, useEffect } from 'react';

export default function BackgroundChat({ room_uuid }: { room_uuid: number }) {
  const [messages, setMessages] = useState<string[]>([]);
  const [aiMessages, setAIMessages] = useState<string[]>([]);

  const [toggle, setToggle] = useState<number>(0);
  const changeToggle = (toggle: number) => {
    setToggle(toggle + 1);
  };

  const createMessage = (newMessage: string) => {
    setMessages([newMessage, ...messages]);
  };

  const createAIMessage = (newAIMessage: string) => {
    setAIMessages([newAIMessage, ...aiMessages]);
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
      // if (isPaused) return;
      // const message = JSON.parse(e.data);
      // setAIMessages(e.data);
      createMessage(e.data);
      console.log('question mes:', e.data);
    };
  }, [toggle]);

  /* When user sends a message in the inputform, useEffect gets triggered. */
  useEffect(() => {
    // if (!socket.current) return;
    if (messages.length !== 0) {
      const mes = messages[0];
      socket.current?.send(mes);
      console.log(mes);
    }
  }, [toggle]);

  return (
    <div className={classes.BackgroundChat}>
      <MessageList messages={messages} />
      <InputForm create={createMessage} toggle={changeToggle} />
    </div>
  );
}
