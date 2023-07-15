import styles from './Message.module.css';

export default function Message({
  message,
  type,
}: {
  message: string;
  type: boolean;
}) {
  return (
    <>
      {type == false ? (
        <div className={styles.MessageAI}>{message}</div>
      ) : (
        <div className={styles.Message}>{message}</div>
      )}
    </>
  );
}
