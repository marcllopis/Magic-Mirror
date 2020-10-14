import React, { useState } from 'react';
import RoomViewComponent from '../components/RoomViewComponent'

export const Home = (props) => {

  let [thumbnailStatus, setThumbnailState] = useState(true)
  let [externalVideoStatus, setExternalVideoState] = useState(true)
  let [userName, setUserName] = useState('');
  let [userCity, setUserCity] = useState('');
  let [showRoom, setShowRoom] = useState(false)

  const toggleThumbnail = () => setThumbnailState(!thumbnailStatus)
  const toggleExternalVideo = checkIfMirror => {
    if (checkIfMirror) {
      setExternalVideoState(true)
      setThumbnailState(true)
    } else {
      setExternalVideoState(false)
      setThumbnailState(false)
    }
  }


  return (
    <div>
      {
        !showRoom ?
          <div>
            <h1>Welcome!</h1>
            <input
              value={userName}
              onChange={e => setUserName(e.target.value)}
              placeholder='Name...'
            />
            <input
              value={userCity}
              onChange={e => setUserCity(e.target.value)}
              placeholder='City...'
            />
            <button onClick={() => setShowRoom(true)}>GO</button>
          </div>
          :
          <RoomViewComponent
            roomName={'testingroom'}
            configUrl={'https://api.simplewebrtc.com/config/guest/57b6ffcbb7bb9769d8d56fcb'}
            thumbnail={thumbnailStatus}
            toggleThumbnail={toggleThumbnail}
            externalVideo={externalVideoStatus}
            toggleExternalVideo={toggleExternalVideo}
            userName={userName}
            userCity={userCity}
          />
      }
    </div>
  );
}



