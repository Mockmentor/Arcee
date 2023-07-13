import Topic from '../Topic/Topic';
import { TopicEntity } from '../../domain/topics.entities';
import classes from './TopicList.module.css';
import { createRoom } from '../../api/rooms.api';
import { useNavigate } from 'react-router-dom';

function TopicList({ topics }: { topics: TopicEntity[] }) {
  const navigate = useNavigate();

  const handleTopicClick = async (topic_id: number) => {
    try {
      const room = await createRoom({ topicId: topic_id });
      // console.log('Room created:', room);
      navigate('chat', { state: { room: room } });
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <div className={classes.TopicList}>
      {topics.map((topic, i) => (
        <Topic
          text={topic.name}
          key={i}
          onClick={() => {
            handleTopicClick(topic.id);
          }}
        />
      ))}
    </div>
  );
}

export default TopicList;
