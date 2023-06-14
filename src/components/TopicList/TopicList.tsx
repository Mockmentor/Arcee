import Topic from '../Topic/Topic';
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
