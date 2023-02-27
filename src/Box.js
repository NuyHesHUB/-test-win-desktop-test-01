import React from 'react';

const Box = (props) => {
  const { 
    title,
    cover,
    children,
    modalId,
    toggleModal
  } = props;
  return (
    <div className="col">
      <div className="col__cover">
        <img
          src={cover}
          alt="Box Image comes here"
        />
      </div>
      <div className="col__detail">
        <h2>{title}</h2>
        <p>
          {children}
        </p>
        <button aria-label ="show modal" onClick={()=>toggleModal(modalId)} className="btn">Show Modal</button>
      </div>
    </div>
  );
}

export default Box;