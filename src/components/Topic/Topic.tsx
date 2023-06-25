import classes from "./Topic.module.css";

function Topic({
  text,
  onClick,
}: {
  text: string;
  onClick: (...args: any) => any;
}) {
  return (
    <button className={classes.Topic} onClick={onClick}>
      {text}
    </button>
  );
}

export default Topic;
