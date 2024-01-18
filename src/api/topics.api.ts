import { TopicEntity } from "../domain/topics.entities";

export async function getTopics(): Promise<TopicEntity[]> {
  const url = `${process.env.REACT_APP_OPTIMUS_PRIME_URL}/topics`;
  console.log(url)

  if (!url) {
    throw new Error("OPITIMUS_PRIME_URL is not defined");
  }

  const response = await fetch(url);
  const topics = await response.json();
  console.log(topics)

  return topics as TopicEntity[];
}
