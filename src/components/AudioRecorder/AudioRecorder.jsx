import { useState, useRef } from 'react';
// import styles from '../InputForm/InputForm.module.css';
import styles from '../AudioRecorder/AudioRecorder.module.css';
const mimeType = 'audio/wav';

const AudioRecorder = ({ send }) => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState();

  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

  const getMicrophonePermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.');
    }
  };

  const stopRecording = () => {
    setRecordingStatus('inactive');
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);

      send(audioBlob);
    };
  };

  const startRecording = async () => {
    setRecordingStatus('recording');
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  return (
    <div className="audio-controls">
      {!permission ? (
        <button className={styles.mike} onClick={getMicrophonePermission} type="button">
          <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.10999 7.47993C10.89 6.82993 12.83 6.82993 14.61 7.47993" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.03 10.4799C11.23 10.1499 12.5 10.1499 13.7 10.4799" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>  
        </button>
      ) : null}
      {permission && recordingStatus === 'inactive' ? (
        <button className={styles.mike} onClick={startRecording} type="button">
          <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.10999 7.47993C10.89 6.82993 12.83 6.82993 14.61 7.47993" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.03 10.4799C11.23 10.1499 12.5 10.1499 13.7 10.4799" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      ) : null}
      {recordingStatus === 'recording' ? (
        <button className={styles.mike} onClick={stopRecording} type="button">
          <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.82 6.53C17.16 3.93 14.81 2 12 2C8.69 2 6 4.69 6 8V13C6 14.46 6.52 15.8 7.39 16.84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 9.97998V13C18 16.31 15.31 19 12 19C11.27 19 10.56 18.87 9.92004 18.63" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.85999 19.58C7.46999 21.08 9.62999 22 12 22C16.97 22 21 17.97 21 13V11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.5 2.99023L2.5 21.9902" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.55 5.49977V2.25977" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 3.5V7.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      ) : null}

      {/* {audio ? (
        <div className="audio-container">
          <audio src={audio} controls></audio>
          <a download href={audio}>
            Download Recording
          </a>
        </div>
      ) : null} */}
    </div>
  );
};

export default AudioRecorder;
