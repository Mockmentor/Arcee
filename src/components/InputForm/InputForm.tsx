import { useEffect, useRef, useState } from 'react';
import styles from './InputForm.module.css';

interface Props {
  create: (newMessage: string) => void;
}

export default function InputForm({ create }: Props) {
  const [message, setMessage] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  const addNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage = message;
    if (newMessage) create(newMessage);
    setMessage('');
  };

  return (
    <form>
      <input
        className={styles.input}
        type="text"
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" onClick={addNewMessage} hidden />
    </form>
  );
}
