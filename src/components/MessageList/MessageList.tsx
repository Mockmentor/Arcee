import styles from './MessageList.module.css';
import Message from '../Message/Message';

interface Props {
  messages: string[];
  // aiMessages: string[];
}

export default function MessageList({ messages }: Props) {
  return (
    <div className={styles.MessageList}>
      {messages.map((message, index) => (
        <Message message={message} key={index} index={index} />
      ))}
      {/* {aiMessages.map((message, index) => (
        <Message message={message} key={index} index={1} />
      ))} */}
    </div>
  );
}
