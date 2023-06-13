import classes from './Topic.module.css';

function Topic({ text }) {
  return <button className={classes.Topic}>{text}</button>;
}

export default Topic;
