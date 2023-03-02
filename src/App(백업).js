import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

import Draggable from "react-draggable";
/* import {DraggableCore} from 'react-draggable';  */
/* import Draggable, {DraggableCore} from 'react-draggable';  */

import './App.css'
import Icon1 from './Detail/Icon1';
import Icon2 from './Detail/Icon2';

function App() {
  /* draggable */
  const nodeRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
/*   const [position2, setPosition2] = useState({ x: 50, y: 50 }); */

/*   const [Opacity, setOpacity] = useState(false);
  const [Opacity2, setOpacity2] = useState(false); */

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

/*   const trackPos2 = (data) => {
    setPosition2({ x: data.x, y: data.y });
  }; */

/*   const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  }; */


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

  Modal.setAppElement('#root');

  const array = [
    {
      id: 1,
      name: '내컴퓨터',
      image : 'https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png',
      detail : <Icon1/>
    },

    {
      id: 2,
      name: '내문서',
      image : 'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-5.png',
      detail : <Icon2/>
    },
    {
      id: 3,
      name: 'User',
      image : 'https://win98icons.alexmeub.com/icons/png/address_book_card_users.png',
    },
  ];
  const [modalIndexOpen, setModalIndedxOpen] = useState(-1);

  function openModalId(index) {
    setModalIndedxOpen(index);
  }
  function closeModal(index) {
    setModalIndedxOpen(index);
  }


  return (
    <div className='App'>
      <h1>windows</h1>
      {/* map */}
      {array.map((item, index) => (
        <div key={item.id}>
          <span className='icon_wrap' onDoubleClick={() => openModalId(index)}>
            <img className='icon' src={item.image} alt="icon" />
            <p className='icon_title' >{item.name}</p>
          </span>
          <Modal
            isOpen={modalIndexOpen === index}
            onRequestClose={() => closeModal(index)}
            style={customStyles}
            contentLabel='Example Modal'
          >
             <Draggable
              nodeRef={nodeRef}
              onDrag={(e, data) => trackPos(data)}
              /* onStart={handleStart}
              onStop={handleEnd} */
            >
        <div
          ref={nodeRef}
          className="box"
          /* style={{ opacity: Opacity ? "0.6" : "1" }} */
        >
          <span>BOX</span>
          <h2>Modal {item.detail}</h2>
          <span>
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </span>
        </div>
      </Draggable>
            <div className='title_wrap'>
              <div>
                <img className='title_icon' src={item.image} alt="icon" />
                <span>{item.name}</span>
              </div>
              <div>
                <button onClick={closeModal}>─</button>
                <button onClick={closeModal}>□</button>
                <button onClick={closeModal}>X</button>
              </div>
            </div>
            {/* <h2>Modal {item.detail}</h2> */}


          </Modal>
          {/* map end */}
          

          <div className='dock'>
            <button className='dock-start'><img src="https://win98icons.alexmeub.com/images/start-button.png" alt="start_icon" /></button>
            <span>PM4:33</span>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default App;
/* {array.map((item, index) => (
  <div key={item.id}>
    <span className='icon_wrap' onDoubleClick={() => openModalId(index)}>
      <img className='icon' src={item.image} alt="icon" />
      <p className='icon_title' >{item.name}</p>
    </span>
<Modal
            isOpen={modalIndexOpen === index}
            onRequestClose={() => closeModal(index)}
            style={customStyles}
            contentLabel='Example Modal'
          ></Modal> */