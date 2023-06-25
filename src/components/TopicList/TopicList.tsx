import Topic from "../Topic/Topic";
import { TopicEntity } from "../../domain/topics.entities";
import classes from "./TopicList.module.css";

function TopicList({ topics }: { topics: TopicEntity[] }) {
  return (
    <div className={classes.TopicList}>
      {topics.map((topic, i) => (
        <Topic text={topic.name} key={i} />
      ))}
    </div>
  );
}

export default TopicList;
