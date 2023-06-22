import styles from './MessageList.module.css';
import Message from '../Message/Message';

export default function MessageList({ messages }: { messages: string[] }) {
  // const aiMessages = ['OK', 'Good', 'Great'];
  return (
    <div className={styles.MessageList}>
      <div style={{ flexGrow: 1 }}>hey</div>
      <div className={styles.UserMessageList}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    </div>
  );
}
