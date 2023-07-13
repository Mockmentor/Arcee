import styles from './MessageList.module.css';
import Message from '../Message/Message';

export default function MessageList({
  messages,
  aiMessages,
}: {
  messages: string[];
  aiMessages: string[];
}) {
  return (
    <div className={styles.MessageList}>
      {messages.map((message, index) => (
        <Message message={message} key={index} index={0} />
      ))}
      {aiMessages.map((message, index) => (
        <Message message={message} key={index} index={1} />
      ))}
    </div>
  );
}
