import styles from './Message.module.css';

export default function Message({ message }: { message: string }) {
  return (
    <>
      <div className={styles.MessageAI}> u sure?</div>
      <div className={styles.Message}>{message}</div>
    </>
  );
}
