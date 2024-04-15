import React from 'react';
import myPng from './some/1.png';

function MyComp(props) {
  function click() {
    alert('click');
  }

  function play() {
    // const audio = new Audio(fileMp3);
    // audio.play();
  }

  return (
    <>
      <button onClick={click}>НАЖМИ МЕНЯ СКОРЕЙ!</button>
      <img src={myPng} onMouseEnter={play} />
    </>
  );
}

export default MyComp;
