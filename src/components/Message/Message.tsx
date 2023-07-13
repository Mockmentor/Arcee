import styles from './Message.module.css';

export default function Message({
  message,
  index,
}: {
  message: string;
  index: number;
}) {
  return (
    <>
      {index % 2 == 0 ? (
        <div className={styles.MessageAI}>{message}</div>
      ) : (
        <div className={styles.Message}>{message}</div>
      )}
    </>
  );
}
