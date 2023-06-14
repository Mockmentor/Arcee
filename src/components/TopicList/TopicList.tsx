import React from 'react';
import Topic from '../Topic/Topic.jsx';
import classes from './TopicList.module.css';

function TopicList({ topics }: { topics: string[] }) {
  return (
    <div className={classes.TopicList}>
      {topics.map((topic, i) => (
        <Topic text={topic} key={i} />
      ))}
    </div>
  );
}

export default TopicList;
