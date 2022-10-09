import Player from '@vimeo/player';
import { throttle } from 'lodash'; 
import '../css/common.css';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const TIME_KEY = 'videoplayer-current-time';
    
const onPlay = function (data) {
// data is an object containing properties specific to that event
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, stringifiedData);
};

player.on('timeupdate', throttle(onPlay, 1000));


function resumePlayback() {
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
    return;
  }
  const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
  if (paused) {
    player
      .setCurrentTime(paused)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;
          default:
            break;
        }
      });
  }
}

resumePlayback();
