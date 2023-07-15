import { MessageEntity } from '../../domain/messages.entities';
import styles from './MessageList.module.css';
import Message from '../Message/Message';

export default function MessageList({
  messages,
}: {
  messages: MessageEntity[];
}) {
  return (
    <div className={styles.MessageList}>
      {messages.map((message, index) => (
        <Message message={message.text} key={index} type={message.type} />
      ))}
    </div>
  );
}
