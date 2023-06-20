import styles from './MessageList.module.css';
import Message from '../Message/Message';

export default function MessageList({ messages }: { messages: string[] }) {
  return (
    <div className={styles.MessageList}>
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
}
