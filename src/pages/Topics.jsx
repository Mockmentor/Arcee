import TopicList from './../components/TopicList/TopicList';

function Topics() {
  return (
    <div
      style={{
        paddingTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ color: 'white' }}>Please, choose an interview topic:</p>
      <TopicList topics={['Machine Learning', 'Backend']} />
    </div>
  );
}

export default Topics;
