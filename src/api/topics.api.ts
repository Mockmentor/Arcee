import { TopicEntity } from "../domain/topics.entities";

export async function getTopics(): Promise<TopicEntity[]> {
  const url = `${process.env.REACT_APP_OPTIMUS_PRIME_URL}/topics`;

  if (!url) {
    throw new Error("OPITIMUS_PRIME_URL is not defined");
  }

  const response = await fetch(url);

  return (await response.json()) as TopicEntity[];
}
