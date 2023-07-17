import { MessageEntity } from '../../domain/messages.entities';
import { useEffect, useRef, useState } from 'react';
import styles from './InputForm.module.css';
import AudioRecorder from '../AudioRecorder/AudioRecorder.jsx';

interface Props {
  send: (mes: string) => void;
  create: (newMessage: MessageEntity) => void;
}

export default function InputForm({ send, create }: Props) {
  const [message, setMessage] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  const addNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage: MessageEntity = { text: message, type: true };
    if (newMessage) create(newMessage);
    send(message);
    setMessage('');
  };

  const sendAudio = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.area}>
      <form>
        <input
          className={styles.input}
          type="text"
          maxLength={300}
          ref={inputRef}
          value={message}
          readOnly={false}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" onClick={addNewMessage} hidden />
      </form>
      <AudioRecorder send={send} />
    </div>
  );
}
