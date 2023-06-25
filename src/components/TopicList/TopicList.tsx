import Topic from "../Topic/Topic";
import { TopicEntity } from "../../domain/topics.entities";
import classes from "./TopicList.module.css";
import { createRoom } from "../../api/rooms.api";

function TopicList({ topics }: { topics: TopicEntity[] }) {
  const handleTopicClick = async (topic_id: number) => {
    try {
      const room = await createRoom({ topicId: topic_id });
      console.log('Room created:', room);
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <div className={classes.TopicList}>
      {topics.map((topic, i) => (
        <Topic text={topic.name} key={i} onClick={() => {handleTopicClick(topic.id)}}/>
      ))}
    </div>
  );
}

export default TopicList;
