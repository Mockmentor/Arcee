import { RoomEntity } from '../domain/rooms.entities';

export async function createRoom({
  topicId,
}: {
  topicId: number;
}): Promise<RoomEntity> {
  const url = `${process.env.REACT_APP_OPTIMUS_PRIME_URL}/rooms`;

  if (!url) {
    throw new Error('OPITIMUS_PRIME_URL is not defined');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic_id: topicId }),
  });

  return (await response.json()) as RoomEntity;
}
