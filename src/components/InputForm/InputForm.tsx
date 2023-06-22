import { useState } from 'react';
import classes from './InputForm.module.css';

export default function InputForm({
  create,
}: {
  create: (newMessage: string) => void;
}) {
  const [message, setMessage] = useState('');

  const addNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage = message;
    create(newMessage);
    setMessage('');
  };

  return (
    <form>
      <input
        type="text"
        // placeholder="write here"
        style={{
          outline: 'none',
          width: '50vw',
          lineHeight: '2em',
          padding: '5px',
          borderRadius: '5px',
          border: '0',
          backgroundColor: '#373737',
          color: '#ffffff',
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" onClick={addNewMessage} hidden />
    </form>
  );
}
