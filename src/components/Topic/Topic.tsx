import React from 'react';
import classes from './Topic.module.css';

function Topic({ text }: { text: string }) {
  return <button className={classes.Topic}>{text}</button>;
}

export default Topic;
