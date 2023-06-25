import { useEffect, useState } from "react";
import TopicList from "../components/TopicList/TopicList";
import { getTopics } from "../api/topics.api";
import { TopicEntity } from "../domain/topics.entities";

function Topics() {
  const [topics, setTopics] = useState<TopicEntity[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicsData = await getTopics();
        setTopics(topicsData);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div
      style={{
        paddingTop: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ color: "white", fontSize: "1.5rem" }}>
        Please, choose an interview topic:
      </p>
      <TopicList topics={topics} />
    </div>
  );
}

export default Topics;
